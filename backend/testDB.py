from database import *
import base64

config = {
        'user': 'root',
        'password': '123456',
        'host': 'localhost',
        'port': 3306,
        'database': 'compose',
    }
connect = mysql.connector.connect(**config)
cur = connect.cursor()

data = getAll(cur)

idx, imgName, info = data[2]
print(info)
print(idx)
print(base64.b64decode(imgName))
