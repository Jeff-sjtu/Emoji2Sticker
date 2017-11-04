#coding=utf8
 
import httplib
import md5
import urllib
import random
import json

def translate(q):
    appKey = '50f399d98635dd3f'
    secretKey = 'S3soUpU3PBiz246SHW2moBi2YSl1w5pn'
    httpClient = None
    myurl = '/api'
    fromLang = 'zh-CHS'
    toLang = 'EN'
    salt = random.randint(1, 65536)

    sign = appKey+q+str(salt)+secretKey
    m1 = md5.new()
    m1.update(sign)
    sign = m1.hexdigest()
    myurl = myurl+'?appKey='+appKey+'&q='+urllib.quote(q)+'&from='+fromLang+'&to='+toLang+'&salt='+str(salt)+'&sign='+sign
     
    try:
        httpClient = httplib.HTTPConnection('openapi.youdao.com')
        httpClient.request('GET', myurl)
     
        #response是HTTPResponse对象
        response = httpClient.getresponse()
        #print response.read()
        #print(q)
        res = response.read()
        res = json.loads(res)
        return res['translation']
    except Exception, e:
        print e
    finally:
        if httpClient:
            httpClient.close()

if __name__ == '__main__':
    s = translate('恐吓')
    print(s[0])