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
    f = open('../frog/pictures/name.txt','r')
    info = f.readlines()
    cnt = 0
    for item in info:
        imgName, dcrp = item.split(',')
        imgName = imgName.strip()
        dcrp = dcrp.strip()
        #img = [imgName, dcrp]
        tag_info = getClasses(dcrp)
        tag_info['discription'] = dcrp
        tag_info['imgName'] = imgName
        #with open('./pictures/%s' %imgName, 'rb') as imgfile:
        base64_data = base64.b64encode(imgName)
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
