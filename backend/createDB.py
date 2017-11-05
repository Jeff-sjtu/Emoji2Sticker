#coding=utf8
from database import *
from watsonAPI import *
import base64

def main():
    config = {
        'user': 'root',
        'password': '123456',
        'host': 'localhost',
        'port': 3306,
        'database': 'compose',
    }
    connect = mysql.connector.connect(**config)
    cur = connect.cursor()
    init(cur)
    #print "==================="
    #insert(cur,"123","haha")
    #insert(cur,"234","naive")
    #print "==================="
    #print getAll(cur)
    #print "==================="
    #print getI(cur,1)
    #print "==================="
    f = open('../frog/static/dog.txt','r')
    info = f.readlines()
    cnt = 0
    for item in info:
        aline = item.split(',')
        imgName = aline[0]
        dcrp = aline[1:]
        imgName = imgName.strip()
        #dcrp = dcrp.strip()
        #img = [imgName, dcrp]
        tag_info = getClasses("o")
        tag_info['discription'] = ','.join(dcrp)[:-2]
        tag_info['imgName'] = imgName
        tag_info['classes'] = []
        for tag in dcrp:
            if tag[-2] == '\r':
                tag = tag[:-2]
            if tag[-1] == '\n':
                tag = tag[:-1]
            tag_info['classes'].append({u'class_name': tag, u'confidence': float(1)})
        
        #with open('./pictures/%s' %imgName, 'rb') as imgfile:
        base64_data = base64.b64encode(imgName)
        print(tag_info)
        insert(cur,base64_data,tag_info)
        #img.append(tag_info)
            #print(getALL(cur))
        cnt += 1
        print("%d/200"%(cnt))
        if cnt>=200:
            break
    connect.commit()
    connect.close()

if __name__ == '__main__':
    main()
