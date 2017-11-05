import json
import base64
from database import *
from util import *
import mysql.connector
import copy
from flask import Flask,request
app = Flask(__name__)

all_imgs = None
hack = []
@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/getImg', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_data()
        data = json.loads(data)
        tagList = data['desc']
        
        tmp = []
        for item in tagList:
            tag = item.split(' ')
            for tag_item in tag:
                tmp.append(tag_item)
        tagList = tmp

        result = []

        hack_data = ''.join(tmp)
        global hack
        #print hack
        print hack_data
        flag = False
        for d in hack:
            if hack_data==d[0]:
                flag = True
                result.append("http://139.198.189.135:5000/static/hack/"+d[1])
        data = main(tagList)

        data = [base64.b64decode(d) for d in data]
        for d in data:
            result.append("http://139.198.189.135:5000/static/pictures/"+d)
        if flag:
            return json.dumps(result[:2])
        else:
            return json.dumps(result[:4])
    else:
        pass
    return 'it works'

def main(tagList):
    global all_imgs
    # initial database
    config = {
        'user': 'root',
        'password': '123456',
        'host': 'localhost',
        'port': 3306,
        'database': 'compose',
    }
    connect = mysql.connector.connect(**config)
    cur = connect.cursor()
    
    if all_imgs==None:
        all_imgs = getAll(cur)

    imgs_info = copy.deepcopy(all_imgs)
    scores = getScore(imgs_info, tagList)

    thrd = np.max(scores)*0.3
    for i in range(len(imgs_info)):
        imgs_info[i].append(scores[i])

    res_img = sorted(imgs_info,key=lambda x:-x[3])
    #for i in range(max(3,len(imgs_info))):
        #print(imgs_info[i][2])
    final_res = []
    cnt = 0
    for item in res_img:
        if item[3]>=thrd and cnt<4:
            final_res.append(item[1])
        cnt += 1



    connect.commit() 
    connect.close()

    return final_res

if __name__ == '__main__':
    with open('hack.csv','rb') as f:
        temp = f.readlines()
        hack = [t.split(",") for t in temp]
    app.run(host='0.0.0.0')

