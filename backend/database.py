import mysql.connector
import cPickle as pickle
import base64

def insert(cur,img,classes):
    #img = base64.b64encode(img)
    classes = base64.b64encode(pickle.dumps(classes))
    i = getLastNumber(cur)+1
    cmd = """insert into img (img_id,img_bin,img_classes) values (%d,"%s","%s")"""%(i,img,classes)
    #print cmd
    cur.execute(cmd)
    cmd = """update img set img_bin="%d" where img_id=0"""%(i)
    cur.execute(cmd)

def getLastNumber(cur):
    cur.execute("select img_bin from img where img_id=0")
    for row in cur:
        return int(row[0])
    
def getAll(cur):
    cur.execute("select * from img where img_id>0")
    result = []
    for row in cur:
        temp = []
        for i,d in enumerate(row):
            if i==2:
                temp.append(pickle.loads(base64.b64decode(d)))
            else:
                temp.append(d)
        result.append(temp)
    return result

def getI(cur,i):
    cur.execute("select * from img where img_id="+str(i))
    temp = []
    for row in cur:
        for i,d in enumerate(row):
            if i==2:
                temp.append(pickle.loads(base64.b64decode(d)))
            else:
                temp.append(d)
        return temp

def init(cur):
    cur.execute("drop table img")
    cur.execute("""
CREATE TABLE `img`(
   `img_id` INT NOT NULL,
   `img_bin` TEXT NOT NULL,
   `img_classes` TEXT NOT NULL,
   PRIMARY KEY ( `img_id` )
)DEFAULT CHARSET=utf8""")
    cur.execute("""insert into img (img_id,img_bin,img_classes) values (0,"0","asd")""")

if __name__=='__main__':
    """
    config = {  
        'user': 'admin',
        'password': 'KXUSMLNSQJREEDWO',
        'host': 'sl-us-south-1-portal.10.dblayer.com',
        'port': 26852,
        'database': 'compose',
    }
    """
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
    print "==================="
    insert(cur,"123","haha")
    insert(cur,"234","naive")
    print "==================="
    print getAll(cur)
    print "==================="
    print getI(cur,1)
    print "==================="
    connect.commit() 
    connect.close()
