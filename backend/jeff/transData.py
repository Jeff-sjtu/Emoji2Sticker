#coding=utf8
from translate import *


with open('chinese.csv') as f:
    with open('trainingData.csv','w') as f_res:
        all_string = f.readlines()
        cnt = 0
        for s in all_string:
            cnt += 1
            if cnt == 1:
                continue
            s = s.strip().split(',')
            s_res = []
            for i in range(len(s)):
                item = s[i]
                #item = eval("'"+item+"'")
                print(item)
                res = translate(item)[0]
                res = res.replace(',',' ')
                s_res.append(res)
                print(res)
            s_res = ','.join(s_res)
            f_res.write(s_res+'\n')

#res = translate(q='笑死本宝宝了') 
#print(res)
