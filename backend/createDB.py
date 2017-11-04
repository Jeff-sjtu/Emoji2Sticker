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
    f = open('resultEnglish.txt','r')
    info = f.readlines()
    for item in info:
        imgName, dcrp = item.split(',')
        imgName = imgName.strip()
        dcrp = dcrp.strip()
        img = [imgName, dcrp]
        tag_info = getClasses(dcrp)
        img.append(tag_info)
        print(img)
        
    connect.commit() 
    connect.close()

if __name__ == '__main__':
    main()