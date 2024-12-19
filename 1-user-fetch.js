fetch('https://bff-user.debug.591.com.tw/v1/account/count?device=pc&deviceid=db39b572-6818-44cd-b8e7-aae836fd82b7', {
  headers: {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Cookie': 'webp=1; T591_TOKEN=db39b572-6818-44cd-b8e7-aae836fd82b7; _gcl_au=1.1.311420218.1732602137; PHPSESSID=6637aqtngcitopqcsvo7hospnn; is_new_index=1; is_new_index_redirect=1; houseResourceRegionId=3; _fbp=fb.2.1732602967616.170306880832289253; user_index_role=2; is_new_index=1; is_new_index_redirect=1; tw591__privacy_agree=1; user_index_role=2; user_browse_recent=a%3A2%3A%7Bi%3A0%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A12715187%3B%7Di%3A1%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A16885882%3B%7D%7D; __trace_cache__=; __trace_origin__=; tw591_origin=im-newhouse; __utmc=82835026; tw591__refresh_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWQiOiI2NjM3YXF0bmdjaXRvcHFjc3ZvN2hvc3BubiJ9.NjckEwACB8hwjqQr6R3D-g7EyUntrZB3OferDs0O1dM; tw591__im_token=; __utma=82835026.616234263.1711508412.1732858855.1733200302.4; __utmz=82835026.1733200302.4.3.utmcsr=activity.debug.591.com.tw|utmccn=(referral)|utmcmd=referral|utmcct=/; urlJumpIp=1; cache_username=m-2078254; _gid=GA1.3.1686339934.1733221647; tw591__access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMDc4MjU0LCJyZWFsbmFtZSI6Ilx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYlx1NGUwMFx1NmJkYiIsInNleCI6Miwicm9sZSI6ImNvbXBhbnkiLCJjdWJfaWQiOjAsImFkbWluX2lkIjowLCJzdWJfdHlwZSI6MCwiZXhwIjoxNzMzMjc4MDIzfQ.ZG36BEp09fq1_pL28Kpz-TAblvXEiOi57hka5Bn5x4E; statement-privacy=%7B%22userIds%22%3A%5B2722817%2C37%2C2077923%2C2732390%2C2078254%5D%2C%22isAgree%22%3Atrue%7D; __loc__=MTkyLjE2OC4yLjEwMg==; rentPreventFraud=0; statement-privacy=%7B%22userIds%22%3A%5B2722817%2C37%2C2077923%2C2732390%2C2078254%5D%2C%22isAgree%22%3Atrue%7D; cookie_login_user_id=37; last_search_type=9; cookie_login_user_id=3892002; user_browse_recent=a%3A4%3A%7Bi%3A0%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A16943781%3B%7Di%3A1%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A16881174%3B%7Di%3A2%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A16241151%3B%7Di%3A3%3Ba%3A2%3A%7Bs%3A4%3A%22type%22%3Bi%3A2%3Bs%3A7%3A%22post_id%22%3Bi%3A16885882%3B%7D%7D; tw591__refresh_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWQiOiI2NjM3YXF0bmdjaXRvcHFjc3ZvN2hvc3BubiJ9.NjckEwACB8hwjqQr6R3D-g7EyUntrZB3OferDs0O1dM; tw591__access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozODkyMDAyLCJyZWFsbmFtZSI6Ilx1NTk5ZVx1NTk5ZVx1ODJiMSIsInNleCI6Miwicm9sZSI6Im1lZGl1bSIsImN1Yl9pZCI6MCwiYWRtaW5faWQiOjAsInN1Yl90eXBlIjowLCJleHAiOjE3MzMzNjcwNDd9.Wv1auF2pvaKIBmUKWrSRC66axChcWYQpoCOu8zTfhMw; __one_id__=01J3KXXCZ1YKWPMBWWJ3298462; timeDifference=-1; _ga_H07366Z19P=GS1.3.1733385236.19.1.1733385264.32.0.0; _ga=GA1.1.616234263.1711508412; _ga_HDSPSZ773Q=GS1.1.1733378589.51.1.1733386205.30.0.0',
    'Origin': 'https://user.debug.591.com.tw',
    'Pragma': 'no-cache',
    'Referer': 'https://user.debug.591.com.tw/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNywicmVhbG5hbWUiOiJcdTUzODJcdTUyYThcdTdkMjBcdTU0N2RcdTVlOWNcdTUxOWIiLCJzZXgiOjEsInJvbGUiOiJjb21wYW55IiwiY3ViX2lkIjowLCJhZG1pbl9pZCI6MCwic3ViX3R5cGUiOjAsImV4cCI6MTczMzM4Njc3NX0.KCfK_wZRgbf5oLY60z2hLN-pnqkEZ98KZk3C2lQ_UmM',
    'device': 'pc',
    'deviceid': 'db39b572-6818-44cd-b8e7-aae836fd82b7',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"'
  }
}).then(async(res) => {
  console.log(await res.json());
})

