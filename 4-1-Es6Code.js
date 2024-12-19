import { webcrypto as crypto } from 'crypto';
import { TextEncoder, TextDecoder } from 'util';

class CryptoClient {
  constructor() {
    this.key = "426c848e0f";
  }

  // 工具方法 - 转换十六进制字符串为 Uint8Array
  hexToUint8Array(hexString) {
    if (!/^[0-9a-fA-F]+$/.test(hexString)) {
      throw new Error("Invalid hex string");
    }
    const matches = hexString.match(/[\da-fA-F]{2}/g);
    const numbers = matches.map(byte => Number.parseInt(byte, 16));
    return new Uint8Array(numbers);
  }

  // 工具方法 - 生成时间戳的 Uint8Array
  generateTimestampArray(timestamp = Date.now()) {
    const array = new Uint8Array(8);
    for (let i = 0; i < 8; i++) {
      array[i] = (timestamp >> (8 * (7 - i))) & 255;
    }
    return array;
  }

  // 工具方法 - base64 转 Uint8Array
  base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const length = binaryString.length;
    const array = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
      array[i] = binaryString.charCodeAt(i);
    }
    return array.buffer;
  }

  async deriveKey(options) {
    const algorithm = options.algorithm || "AES-CBC";
    const salt = this.generateTimestampArray(options.salt);
    const keyUsages = options.keyUsages || ["decrypt"];
    
    const baseKey = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(options.secret),
      {
        name: "HKDF",
        hash: "SHA-256"
      },
      false,
      ["deriveKey"]
    );

    const info = new TextEncoder().encode(options.info || "");

    return await crypto.subtle.deriveKey(
      {
        name: "HKDF",
        hash: "SHA-256",
        salt: salt,
        info: info
      },
      baseKey,
      {
        name: algorithm,
        length: 256
      },
      false,
      keyUsages
    );
  }

  async decrypt(key, data, options = {}) {
    if (!(key.type && key.type === "secret")) {
      throw new Error("Invalid key type");
    }

    const params = {
      ciphertext: data,
      iv: options.iv
    };

    const algorithm = {
      name: key.algorithm.name,
      iv: params.iv
    };

    try {
      const decrypted = await crypto.subtle.decrypt(
        algorithm,
        key,
        params.ciphertext
      );

      if (decrypted === undefined) {
        throw new Error("Unable to decrypt data, The data is undefined");
      }

      return JSON.parse(new TextDecoder().decode(decrypted));
    } catch (error) {
      if (error instanceof Error && error.message === "Unsupported state or unable to authenticate data") {
        throw new Error("Unable to decrypt data");
      }
      if (typeof error === "object") {
        throw new TypeError(error);
      }
      throw new Error("Unable to decrypt data, " + error);
    }
  }

  async rawDataToDecrypt(data, options) {
    const key = await this.deriveKey({
      secret: options.secret,
      salt: options.salt,
      keyUsages: ["decrypt"]
    });

    const decodedData = JSON.parse(decodeURIComponent(atob(data)));
    const iv = this.hexToUint8Array(decodedData.iv);
    // ss
    const ciphertext = this.base64ToUint8Array(decodedData.data);

    return key ? await this.decrypt(key, ciphertext, { iv }) : null;
  }

  rule426c848e0f(data) {
    return (data && Object.keys(data).sort().reverse())
      .map(key => `${key}=${data[key]}`)
      .join("$$");
  }
}

// 导出实例
const cryptoClient = new CryptoClient();

export default {
  Decryptor: class Decryptor {
    constructor(options) {
      this.options = options;
    }

    async decrypt(data) {
      if (typeof data === "object") {
        return data;
      }
      return await this.options.decryptImpl({
        data,
        ruleGetter: this.options.ruleGetter
      });
    }
  },
  key: cryptoClient.key,
  rawDataToDecrypt: cryptoClient.rawDataToDecrypt.bind(cryptoClient),
  rule426c848e0f: cryptoClient.rule426c848e0f
};