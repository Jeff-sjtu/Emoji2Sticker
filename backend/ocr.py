########### Python 2.7 #############
import httplib, urllib, base64, json

###############################################
#### Update or verify the following values. ###
###############################################

# Replace the subscription_key string value with your valid subscription key.
subscription_key = '3b24d41162714af897e7b00e4b29566d'

# Replace or verify the region.
#
# You must use the same region in your REST API call as you used to obtain your subscription keys.
# For example, if you obtained your subscription keys from the westus region, replace 
# "westcentralus" in the URI below with "westus".
#
# NOTE: Free trial subscription keys are generated in the westcentralus region, so if you are using
# a free trial subscription key, you should not need to change this region.
uri_base = 'westcentralus.api.cognitive.microsoft.com'

headers = {
    # Request headers.
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscription_key,
}

params = urllib.urlencode({
    # Request parameters. The language setting "unk" means automatically detect the language.
    'language': 'zh-Hans',
    'detectOrientation ': 'true',
})

# The URL of a JPEG image containing text.

ignore = [u'\u002c', u'\u002e', u'\u002f', u'\u003b', u'\u0027', u'\u005b', u'\u005d', u'\u005c', u'\u002d', u'\u003d', u'\u003c', 
          u'\u003e', u'\u003f', u'\u003a', u'\u0022', u'\u007b', u'\u007d', u'\u007c', u'\u005f,' u'\u002b', u'\uff0c', u'\u3002', u'\uff01', u'\uff1f',
          u'\u3001', u'\uff1b', u'\u2018', u'\u3010', u'\u3011', u'\u3001', u'\u300a', u'\u300b', u'\uff1f', u'\uff1a', u'\u201c']

# ignore = ['!', '?']
def text_detection(url):
    # Execute the REST API call and get the response.
    conn = httplib.HTTPSConnection('westcentralus.api.cognitive.microsoft.com')
    conn.request("POST", "/vision/v1.0/ocr?%s" % params, body, headers)
    response = conn.getresponse()
    data = response.read()

    # 'data' contains the JSON data. The following formats the JSON data for display.
    parsed = json.loads(data)
    # print ("Response:")
    text = []
    for i in parsed[u'regions']:
        message = ''
        for j in i[u'lines']:
            for k in j[u'words']:
                flag = 0
                for t in ignore:
                    if k['text'] == t:
                        flag = 1
                if flag:
                    message += ' '    
                else:
                    message += k['text']
        text.append(message)
    # print (parsed)
    # print (json.dumps(parsed, sort_keys=True, indent=2))
    conn.close()
    return text

