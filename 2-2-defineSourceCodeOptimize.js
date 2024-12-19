//  // change:  new
import regeneratorRuntime from "regenerator-runtime";
// // change:  new
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
  
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
}

function _classCallCheck(instance, Constructor) {
if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
}
}

function _asyncToGenerator(s) {
  return function() {
      var e = this
        , a = arguments;
      return new Promise(function(t, n) {
          var r = s.apply(e, a);
          function i(e) {
              asyncGeneratorStep(r, t, n, i, o, "next", e)
          }
          function o(e) {
              asyncGeneratorStep(r, t, n, i, o, "throw", e)
          }
          i(void 0)
      }
      )
  }
}

function _createClass(e, t, n) {
    // change:  _defineProperties  => Object.defineProperties
  return t && Object.defineProperties(e.prototype, t),
  n && Object.defineProperties(e, n),
  e
}

var t = {}
var s = r;
function r(e, t) {
    var n = i();
    return (r = function(e) {
        return n[e -= 186]
    }
    )(e, t)
}
!function() {
    for (var e = r, t = i(); ; )
        try {
            if (534487 == -parseInt(e(187)) + -parseInt(e(193)) / 2 * (-parseInt(e(197)) / 3) + -parseInt(e(186)) / 4 + parseInt(e(195)) / 5 + parseInt(e(188)) / 6 * (-parseInt(e(190)) / 7) + -parseInt(e(198)) / 8 + parseInt(e(194)) / 9)
                break;
            t.push(t.shift())
        } catch (e) {
            t.push(t.shift())
        }
}();
var c = Object[s(196)];
function i() {
    var e = ["options", "7BgTbik", "ruleGetter", "object", "208298MGPTdW", "24842538ijCGmt", "3335085ULZLSo", "defineProperty", "24lyGkFU", "8064128AeKgkB", "decryptImpl", "3436128HHEDKY", "955457MzsvCL", "5420994jhxTwT"];
    return (i = function() {
        return e
    }
    )()
}
var l = d;
function o() {
    var e = ["join", "fZhic", "deriveKey", "Invalid hex string", "19330oRkuDJ", "DgldC", "salt", "test", "buffer", "getRandomValues", "Unsupported state or unable to authenticate data", "decrypt", "AES-CBC", "mIHRt", "SMCzk", "secret", "padStart", "raw", "pjTiO", "encrypt", "bEVhK", "length", "match", "name", "Invalid key type", "importKey", "22693xSGDwc", "SHA-256", "map", "1081328lhEqGa", "crypto", "5psJauK", "fromCharCode", "KcABa", "data", "info", "7640628RcbunI", "charCodeAt", "subtle", "now", "message", "string", "algorithm", "decode", "10700403DgYthK", "ciphertext", "error", "Unable to decrypt data", "10537011upmigO", "parseInt", "Unable to decrypt data, The data is undefined", "1222464NRYWqJ", "HKDF", "AjLhe", "encode", "stringify", "8ZMPphb", "type", "Unable to decrypt data, ", "from", "9gVjACm", "244892vOoDmf", "parse", "toString"];
    return (o = function() {
        return e
    }
    )()
}
function u(e) {
    var t, n = l, t = e;
    if (!/^[0-9a-fA-F]+$/[l(122)](t))
        throw new Error(n(118));
    var r = e[n(137)](/[\da-fA-F]{2}/g).map(function(e) {
        return Number[n(164)](e, 16)
    });
    return new Uint8Array(r)
}
function d(e, t) {
    var n = o();
    return (d = function(e) {
        return n[e -= 117]
    }
    )(e, t)
}
function f(e, t) {
    return a.apply(this, arguments)
}
function a() {
    return (a = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
        var r, i, o, a, s, c = arguments;
        return regeneratorRuntime.wrap(function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    if (r = 2 < c.length && void 0 !== c[2] ? c[2] : {},
                    i = l,
                    function(e) {
                        var t = d;
                        if (!e[t(172)] || "secret" !== e[t(172)])
                            throw new Error(t(139))
                    }(t),
                    o = {
                        ciphertext: n,
                        iv: r.iv
                    },
                    a = {
                        name: t[i(157)][i(138)],
                        iv: o.iv
                    },
                    e.prev = 4,
                    i(148) !== i(180))
                        return e.next = 8,
                        function() {
                            var r = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n, r) {
                                var i, o, a, s, c;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (i = l,
                                            e.prev = 1,
                                            i(133) == i(133))
                                                return e.next = 5,
                                                globalThis[i(145)][i(153)][i(126)](r, t, n);
                                            e.next = 6;
                                            break;
                                        case 5:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw new _0x52199d(i(173) + _0x3fab90);
                                        case 9:
                                            if (e.prev = 9,
                                            e.t0 = e.catch(1),
                                            i(168) !== i(135)) {
                                                e.next = 15;
                                                break
                                            }
                                            for (o = _0x1a545f(_0xb00116),
                                            a = o[i(136)],
                                            s = new _0x36ad3f(a),
                                            c = 0; c < a; c++)
                                                s[c] = o[i(152)](c);
                                            return e.abrupt("return", s[i(123)]);
                                        case 15:
                                            if (e.t0 instanceof Error && e.t0[i(155)] === i(125))
                                                throw new Error(i(162));
                                            e.next = 17;
                                            break;
                                        case 17:
                                            if (_typeof(e.t0) === i(156))
                                                throw new TypeError(e.t0);
                                            e.next = 19;
                                            break;
                                        case 19:
                                        case "end":
                                            return e.stop()
                                        }
                                }, e, null, [[1, 9]])
                            }));
                            return function(e, t, n) {
                                return r.apply(this, arguments)
                            }
                        }()(t, o[i(160)], a);
                    e.next = 12;
                    break;
                case 8:
                    if (void 0 === (s = e.sent))
                        throw new Error(i(165));
                    e.next = 11;
                    break;
                case 11:
                    return e.abrupt("return", JSON[i(177)]((new TextDecoder)[i(158)](s)));
                case 12:
                    if (_0x3fd738 instanceof _0x5b940a && _0x23a1bc[i(155)] === i(125))
                        throw new _0x4bce44(i(162));
                    e.next = 14;
                    break;
                case 14:
                    if (("undefined" == typeof _0x599a78 ? "undefined" : _typeof(_0x599a78)) === i(156))
                        throw new _0x2954ca(_0x4aa6fb);
                    e.next = 16;
                    break;
                case 16:
                    e.next = 24;
                    break;
                case 18:
                    if (e.prev = 18,
                    e.t0 = e.catch(4),
                    i(120) == i(120))
                        throw new Error(i(173) + e.t0);
                    e.next = 22;
                    break;
                case 22:
                    if (_0x3e7c44.type && "secret" === _0x2fec0f.type) {
                        e.next = 24;
                        break
                    }
                    throw new _0x15f675(i(139));
                case 24:
                case "end":
                    return e.stop()
                }
        }, e, null, [[4, 18]])
    }))).apply(this, arguments)
}
function h(e) {
    return p.apply(this, arguments)
}
function p() {
    return (p = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
        var n, r, i, o, a, s;
        return regeneratorRuntime.wrap(function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return r = t[(n = l)(138)] || n(127),
                    i = function(e) {
                        for (var t = 0 < arguments.length && void 0 !== e ? e : Date[l(154)](), n = new Uint8Array(8), r = 0; r < 8; r++)
                            n[r] = t >> 8 * (7 - r) & 255;
                        return n
                    }(t[n(121)]),
                    o = t.keyUsages || ["decrypt"],
                    e.next = 6,
                    function() {
                        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
                            var n, r, i, o, a, s, c, u = arguments;
                            return regeneratorRuntime.wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n = 1 < u.length && void 0 !== u[1] ? u[1] : "raw",
                                        r = 2 < u.length ? u[2] : void 0,
                                        i = 3 < u.length && void 0 !== u[3] && u[3],
                                        o = 4 < u.length && void 0 !== u[4] ? u[4] : [l(134), "decrypt"],
                                        a = l,
                                        e.prev = 5,
                                        a(129) == a(129)) {
                                            e.next = 10;
                                            break
                                        }
                                        for (s = new _0x25715c(8),
                                        c = 0; c < 8; c++)
                                            s[c] = _0x28ec1a >> 8 * (7 - c) & 255;
                                        return e.abrupt("return", s);
                                    case 10:
                                        return e.next = 12,
                                        globalThis.crypto.subtle[a(140)](n, t, r, i, o);
                                    case 12:
                                        return e.abrupt("return", e.sent);
                                    case 15:
                                        if (e.prev = 15,
                                        e.t0 = e.catch(5),
                                        a(128) != a(128))
                                            return e.abrupt("return", _0x2d5b5e[a(174)](_0x9d56c2).map(function(e) {
                                                return e[a(178)](16)[a(131)](2, "0")
                                            })[a(179)](""));
                                        e.next = 19;
                                        break;
                                    case 19:
                                        console[a(161)](e.t0);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e, null, [[5, 15]])
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()((new TextEncoder)[n(169)](t[n(130)]), n(132), {
                        name: n(167),
                        hash: "SHA-256"
                    }, !1, [n(117)]);
                case 6:
                    if (a = e.sent,
                    s = (new TextEncoder)[n(169)](t[n(150)] || ""),
                    e.t0 = a,
                    e.t0)
                        return e.next = 12,
                        function() {
                            var a = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n, r, i, o, a) {
                                var s;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return s = l,
                                            e.next = 3,
                                            globalThis.crypto.subtle.deriveKey({
                                                name: s(167),
                                                hash: s(142),
                                                salt: n,
                                                info: r
                                            }, t, i, o, a);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                        }
                                }, e)
                            }));
                            return function(e, t, n, r, i, o) {
                                return a.apply(this, arguments)
                            }
                        }()(a, i, s[n(123)], {
                            name: r,
                            length: 256
                        }, !1, o);
                    e.next = 13;
                    break;
                case 12:
                    e.t0 = e.sent;
                case 13:
                    return e.abrupt("return", e.t0);
                case 14:
                case "end":
                    return e.stop()
                }
        }, e)
    }))).apply(this, arguments)
}
function m(e, t) {
    var n = v();
    return (m = function(e) {
        return n[e -= 108]
    }
    )(e, t)
}
function v() {
    var e = ["624658ZsYGyE", "4qOXXij", "reverse", "2740320YpGTyi", "2028qPLpLH", "sort", "map", "join", "1331771OideQq", "8tVYiGF", "11792dfcwea", "1770156NnrdfX", "1734CDXvDz", "keys", "21185sfFCBc", "5003325sxOATc", "5UlSmYl"];
    return (v = function() {
        return e
    }
    )()
}
!function() {
    for (var e = d, t = o(); ; )
        try {
            if (879093 == +parseInt(e(176)) + -parseInt(e(144)) / 2 * (parseInt(e(175)) / 3) + -parseInt(e(166)) / 4 + -parseInt(e(146)) / 5 * (-parseInt(e(151)) / 6) + -parseInt(e(159)) / 7 + parseInt(e(171)) / 8 * (-parseInt(e(163)) / 9) + parseInt(e(119)) / 10 * (parseInt(e(141)) / 11))
                break;
            t.push(t.shift())
        } catch (e) {
            t.push(t.shift())
        }
}(),
function() {
    for (var e = m, t = v(); ; )
        try {
            if (837676 == parseInt(e(113)) * (parseInt(e(114)) / 2) + parseInt(e(108)) / 3 * (parseInt(e(115)) / 4) + parseInt(e(111)) / 5 * (-parseInt(e(109)) / 6) + parseInt(e(122)) / 7 * (-parseInt(e(123)) / 8) + parseInt(e(112)) / 9 + -parseInt(e(117)) / 10 + -parseInt(e(124)) / 11 * (parseInt(e(118)) / 12))
                break;
            t.push(t.shift())
        } catch (e) {
            t.push(t.shift())
        }
}(),

// t.Decryptor = function() {
//     "use strict";
//     function a(e) {
//         _classCallCheck(this, a);
//         var t, n, r, i, o = s;
//         i = t,
//         (r = "options" + "")in (n = this) ? c(n, r, {
//             enumerable: !0,
//             configurable: !0,
//             writable: !0,
//             value: i
//         }) : n[r] = i,
//         this[o(189)] = e
//     }
//     var t;
//     return _createClass(a, [{
//         key: "decrypt",
//         value: (t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
//             var n;
//             return regeneratorRuntime.wrap(function(e) {
//                 for (; ; )
//                     switch (e.prev = e.next) {
//                     case 0:
//                         if (n = s,
//                         _typeof(t) !== n(192)) {
//                             e.next = 5;
//                             break
//                         }
//                         e.t0 = t,
//                         e.next = 8;
//                         break;
//                     case 5:
//                         return e.next = 7,
//                         this[n(189)][n(199)]({
//                             data: t,
//                             ruleGetter: this[n(189)][n(191)]
//                         });
//                     case 7:
//                         e.t0 = e.sent;
//                     case 8:
//                         return e.abrupt("return", e.t0);
//                     case 9:
//                     case "end":
//                         return e.stop()
//                     }
//             }, e, this)
//         })),
//         function(e) {
//             return t.apply(this, arguments)
//         }
//         )
//     }]),
//     a
// }(),
t.Decryptor = class Decryptor {
    constructor(options) {
      this.options = options;
    }
  
    async decrypt(data) {
      if (typeof data === 'object') {
        return data;
      }
      
      return await this.options.decryptImpl({
        data,
        ruleGetter: this.options.ruleGetter
      });
    }
}
t.key = "426c848e0f",
t.rawDataToDecrypt = function() {
    var n = _asyncToGenerator(regeneratorRuntime.mark(function e(t, n) {
        var r, i, o, a, s;
        return regeneratorRuntime.wrap(function(e) {
            for (; ; )
                switch (e.prev = e.next) {
                case 0:
                    return r = l,
                    e.next = 3,
                    h({
                        secret: n[r(130)],
                        salt: n[r(121)],
                        keyUsages: ["decrypt"]
                    });
                case 3:
                    if (i = e.sent,
                    o = JSON[r(177)](decodeURIComponent(atob(t))),
                    a = u(o.iv),
                    s = function(e) {
                        for (var t = l, n = atob(e), r = n.length, i = new Uint8Array(r), o = 0; o < r; o++)
                            i[o] = n.charCodeAt(o);
                        return i[t(123)]
                    }(o[r(149)]),
                    e.t0 = i,
                    e.t0)
                        return e.next = 11,
                        f(i, s, {
                            iv: a
                        });
                    e.next = 12;
                    break;
                case 11:
                    e.t0 = e.sent;
                case 12:
                    return e.abrupt("return", e.t0);
                case 13:
                case "end":
                    return e.stop()
                }
        }, e)
    }));
    return function(e, t) {
        return n.apply(this, arguments)
    }
}(),
t.rule426c848e0f = function(t) {
    var e = m;
    return (t && Object[e(110)](t)[e(119)]()[e(116)]())[e(120)](function(e) {
        return e + "=" + t[e]
    })[e(121)]("$$")
}

console.log(t);

export default t;