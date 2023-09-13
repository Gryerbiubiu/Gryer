"""
# 高高快乐每一天！#
# -*- coding:utf-8 -*-
# @File : 风险关键词提取.py
# @Time : 2023/8/2 13:43
"""
import requests

cookies = {
    'acw_sc__v2': '64c9e425a858a349895483da41aa616e3d83c7d7',
    'web_app_uuid': '200fffe7-3b7e-48ff-b885-24ae0425db4a',
    'XSRF-TOKEN': 'fngc0yvzowdlkquwuz77',
    'locale': 'zh_CN',
    'apk_download_url_postfix': '/organic-direct',
    'tap_theme': 'light',
    '_gid': 'GA1.2.1013521486.1690952758',
    '_clck': '1qft3no|2|fdt|0|1309',
    'Hm_lvt_536e39e029b26af67aecbc444cdbd996': '1690952761',
    'acw_tc': '7b39758716909545590858872e7cc580115d330196f48d372b0ec1d03dcfd5',
    'Hm_lpvt_536e39e029b26af67aecbc444cdbd996': '1690954560',
    '_clsk': '1on9mnw|1690954561200|10|1|u.clarity.ms/collect',
    'acw_sc__v3': '64c9eb68e91aac545862218836fa6ab19ef12569',
    'ssxmod_itna2': 'Qq+xBD97KDqsDXDniGeeY5KKWwmuhxYuGhpBqikE+dDlohrDj+Y30=7cQmAUD6iMvAOyDbw2Qq5vPCKKHo1R2P+8KeEwDxob+9mIYes13OEumCoTwfuReFNw0IBe0QA/7EnKD1srIbwfVtYtwCwAp/uAVWjEeO8YDp4b3a+j3sWtZDTtK+wToZLTKcn2sK7Ixk3cgYdcqP3cTvPud6m9kMQyTEgW+4pAb1RcP66HgKII+MCaviF6KwqSiZ6tpvjudfudEp/5qb1Ybi7FtexYoIo6CDSIcXQAmGl5tfo/Wuj9RmqtooRaA8KfqN4jasS5XdawoYDQzCrtNgYFoo58Dsdd=r1eD1AbCS0dA8N4qYPDQoE=6Ao8xh9BmNnzV03xmD2n36x+RWtBWYeeYSAzuGhuhaD3A4W=Vi1KeY2mmbbE4=bDjGR8GDhY4e3UxFTcTEDDwoxKCw46px8G=tFtme3Gt+KwOF4uAftB+uKwnAGqQ0xG5BIG=hD9ffjCH87InYqT8KXDHOY5qGxelUkCqfGHYkqknF3sy9UG8GqM=v/QD5w7=5H+Y4dVOn8G87KWmjMCBxRDMo+lFeQYxDjKDewx4D==',
    'ssxmod_itna': 'eqfxgD0i0=DtG==0QDXDnQAwHRijdNeTDRAEx0HxPGzDAxn40iDtrxkcGir+ibGA24WDLWiRqWijGR+hKAFG7Y4WMjix0aDbqGkbQ6h4GGAxBYDQxAYDGDDPDocPD1D3qDkD7h6CMy1qGWDm4sDYyFDQHGe4DFc2IOP4i7DDvdkx07YRKDe6ahchgCb0gDq0KD9hYDsr0fY0KpjS34M2oEI3Y3Ix0kl40OyZAC74GdXc5z4RqTmGctmnDPeA+eqnGxFGDb76rqFlGPei+xOi+eb7GWdQGqvjTKYYD===',
    '_gat': '1',
    '_ga_6G9NWP07QM': 'GS1.1.1690952757.1.1.1690954766.0.0.0',
    '_ga': 'GA1.1.185991348.1690952758',
}

headers = {
    'authority': 'www.taptap.cn',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    # 'cookie': 'acw_sc__v2=64c9e425a858a349895483da41aa616e3d83c7d7; web_app_uuid=200fffe7-3b7e-48ff-b885-24ae0425db4a; XSRF-TOKEN=fngc0yvzowdlkquwuz77; locale=zh_CN; apk_download_url_postfix=/organic-direct; tap_theme=light; _gid=GA1.2.1013521486.1690952758; _clck=1qft3no|2|fdt|0|1309; Hm_lvt_536e39e029b26af67aecbc444cdbd996=1690952761; acw_tc=7b39758716909545590858872e7cc580115d330196f48d372b0ec1d03dcfd5; Hm_lpvt_536e39e029b26af67aecbc444cdbd996=1690954560; _clsk=1on9mnw|1690954561200|10|1|u.clarity.ms/collect; acw_sc__v3=64c9eb68e91aac545862218836fa6ab19ef12569; ssxmod_itna2=Qq+xBD97KDqsDXDniGeeY5KKWwmuhxYuGhpBqikE+dDlohrDj+Y30=7cQmAUD6iMvAOyDbw2Qq5vPCKKHo1R2P+8KeEwDxob+9mIYes13OEumCoTwfuReFNw0IBe0QA/7EnKD1srIbwfVtYtwCwAp/uAVWjEeO8YDp4b3a+j3sWtZDTtK+wToZLTKcn2sK7Ixk3cgYdcqP3cTvPud6m9kMQyTEgW+4pAb1RcP66HgKII+MCaviF6KwqSiZ6tpvjudfudEp/5qb1Ybi7FtexYoIo6CDSIcXQAmGl5tfo/Wuj9RmqtooRaA8KfqN4jasS5XdawoYDQzCrtNgYFoo58Dsdd=r1eD1AbCS0dA8N4qYPDQoE=6Ao8xh9BmNnzV03xmD2n36x+RWtBWYeeYSAzuGhuhaD3A4W=Vi1KeY2mmbbE4=bDjGR8GDhY4e3UxFTcTEDDwoxKCw46px8G=tFtme3Gt+KwOF4uAftB+uKwnAGqQ0xG5BIG=hD9ffjCH87InYqT8KXDHOY5qGxelUkCqfGHYkqknF3sy9UG8GqM=v/QD5w7=5H+Y4dVOn8G87KWmjMCBxRDMo+lFeQYxDjKDewx4D==; ssxmod_itna=eqfxgD0i0=DtG==0QDXDnQAwHRijdNeTDRAEx0HxPGzDAxn40iDtrxkcGir+ibGA24WDLWiRqWijGR+hKAFG7Y4WMjix0aDbqGkbQ6h4GGAxBYDQxAYDGDDPDocPD1D3qDkD7h6CMy1qGWDm4sDYyFDQHGe4DFc2IOP4i7DDvdkx07YRKDe6ahchgCb0gDq0KD9hYDsr0fY0KpjS34M2oEI3Y3Ix0kl40OyZAC74GdXc5z4RqTmGctmnDPeA+eqnGxFGDb76rqFlGPei+xOi+eb7GWdQGqvjTKYYD===; _gat=1; _ga_6G9NWP07QM=GS1.1.1690952757.1.1.1690954766.0.0.0; _ga=GA1.1.185991348.1690952758',
    'referer': 'https://www.taptap.cn/app/197478/review',
    'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    'x-xsrf-token': 'fngc0yvzowdlkquwuz77',
}

params = {
    'app_id': '197478',
    'limit': '10',
    'sort': 'hot',
    'X-UA': 'V=1&PN=WebApp&LANG=zh_CN&VN_CODE=102&VN=0.1.0&LOC=CN&PLT=PC&DS=Android&UID=134aa0fa-1d3c-4038-8339-60c19aa24325&DT=PC&OS=Windows&OSV=15.0.0',
}

response = requests.get('https://www.taptap.cn/webapiv2/review/v1/list-by-app', params=params, cookies=cookies, headers=headers)
print(response.json())