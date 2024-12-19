import r from './2-2-defineSourceCodeOptimize.js'

var page = 0
var firstRow = page * 30

fetch(`https://bff-house.591.com.tw/v1/web/sale/list?type=2&timestamp=1733370756443&recom_community=1&_v_=426c848e0f&category=1&shType=list&firstRow=${firstRow}&totalRows=25538&regionid=1`, {
  headers: {
    'Accept': 'text/plain, */*; q=0.01',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Cookie': 'webp=1; T591_TOKEN=db39b572-6818-44cd-b8e7-aae836fd82b7; _gcl_au=1.1.311420218.1732602137; PHPSESSID=6637aqtngcitopqcsvo7hospnn; is_new_index=1; is_new_index_redirect=1; houseResourceRegionId=3; _fbp=fb.2.1732602967616.170306880832289253; user_index_role=2; tw591__privacy_agree=1; __trace_cache__=; __trace_origin__=; tw591_origin=im-newhouse; __utmc=82835026; tw591__im_token=; __utma=82835026.616234263.1711508412.1732858855.1733200302.4; __utmz=82835026.1733200302.4.3.utmcsr=activity.debug.591.com.tw|utmccn=(referral)|utmcmd=referral|utmcct=/; urlJumpIp=1; cache_username=m-2078254; _gid=GA1.3.1686339934.1733221647; __loc__=MTkyLjE2OC4yLjEwMg==; rentPreventFraud=0; statement-privacy=%7B%22userIds%22%3A%5B2722817%2C37%2C2077923%2C2732390%2C2078254%5D%2C%22isAgree%22%3Atrue%7D; last_search_type=9; cookie_login_user_id=3892002; user_browse_recent=a%3A4%3A%7Bi%3A0%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A16943781%3B%7Di%3A1%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A16881174%3B%7Di%3A2%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A16241151%3B%7Di%3A3%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A16885882%3B%7D%7D; tw591__refresh_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWQiOiI2NjM3YXF0bmdjaXRvcHFjc3ZvN2hvc3BubiJ9.NjckEwACB8hwjqQr6R3D-g7EyUntrZB3OferDs0O1dM; __one_id__=01J329B78QFWNAHAN4K5W8Z167; tw591__access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozODkyMDAyLCJyZWFsbmFtZSI6Ilx1NTk5ZVx1NTk5ZVx1ODJiMSIsInNleCI6Miwicm9sZSI6Im1lZGl1bSIsImN1Yl9pZCI6MCwiYWRtaW5faWQiOjAsInN1Yl90eXBlIjowLCJleHAiOjE3MzMzNjcwNDd9.Wv1auF2pvaKIBmUKWrSRC66axChcWYQpoCOu8zTfhMw; timeDifference=0; _gat=1; _ga=GA1.3.616234263.1711508412; _ga_H07366Z19P=GS1.3.1733370747.18.1.1733370754.53.0.0; _ga_HDSPSZ773Q=GS1.1.1733369308.50.1.1733370756.47.0.0',
    'Origin': 'https://sale.591.com.tw',
    'Pragma': 'no-cache',
    'Referer': 'https://sale.591.com.tw/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'X-CSRF-TOKEN': 'GZA9VGWsx05VkxqL1o2kdvABnD1Nvp0ra0HicNcK',
    'device': 'pc',
    'deviceid': 'db39b572-6818-44cd-b8e7-aae836fd82b7',
    'encrypt': 'false',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"'
  }
}).then(async(res) => {
  const rawData = await res.text()

  // 改变页码只需改变firstRow即可，  firstRow = page * 30
  var c= {
    "type": "2",
    "timestamp": "1733370756443",
    "recom_community": "1",
    "_v_": "426c848e0f",
    "category": "1",
    "shType": "list",
    "firstRow": firstRow,
    "totalRows": "25538",
    "regionid": "1"
  }

  var decryptor = new r.Decryptor({
    ruleGetter: r["rule".concat(r.key)],
    decryptImpl: function(e) {
        var t = e.data
          , n = (0,
        e.ruleGetter)(c);
        return r.rawDataToDecrypt(t, {
            secret: n,
            salt: c.timestamp
        })
    }
  })

  decryptor.decrypt(rawData).then(res=>{
    console.log(res.data);
  })

})