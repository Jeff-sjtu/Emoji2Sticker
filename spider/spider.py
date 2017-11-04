import requests
import re
import json

keywords = []
with file("keywords.txt") as f:
    keywords = f.readlines()
keywords = [d.strip() for d in keywords]


while(True):
    temp = requests.get('http://www.doutula.com/so/init').json()
    #print temp['hot'].values()
    temp2 = [d for d in temp['hot'].values()]
    keywordlist = []
    if 'keyword' in temp2[0].keys():
        for item in temp2:
            keywordlist.append(item['keyword'])
    else:
        for item in temp2:
            key = item.keys()[0]
            keywordlist.append(item[key]['keyword'])

    for d in keywordlist:
        if not d in keywords:
            keywords.append(d)
            temp = requests.get('http://www.doutula.com/search?keyword='+d)
            #print temp.text
            reg = re.compile(r'data-original="(.*)" style.*\n.*none">(.*)<')
            regMatch = reg.match(temp.text)
            for item in regMatch:
                print(type(item))
            raw_input()
