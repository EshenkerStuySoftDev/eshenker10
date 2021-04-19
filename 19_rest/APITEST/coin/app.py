import urllib3, json

file=open("apikey.txt", "r")
url="https://coinlib.io/api/v1"+file.read()
file.close()

u=urllib3.request.urlopen(url)
response=u.read()
data=json.loads(response)

print(data)