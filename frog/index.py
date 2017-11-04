import json
import base64
from flask import Flask,request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/getImg', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_data()
        data = ['1','2','3']
        #TODO
        data = [base64.b64encode(d) for d in data]
        return json.dumps(data)
    else:
        pass
    return 'it works'
if __name__ == '__main__':
    app.run(host='0.0.0.0')

