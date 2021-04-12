# Team e&a - Anya Zorin, Ethan Shenker
# SoftDev
# K19 -- A RESTful Journey Skyward
# 2021-4-5

from flask import Flask, render_template
import urllib, json
app = Flask(__name__) 

file=open("apikey.txt", "r")
url="https://ipgeolocation.abstractapi.com/v1?api_key="+file.read()
file.close()

@app.route("/")
def root():
    u=urllib.request.urlopen(url)
    response=u.read()
    data=json.loads(response)
    print(data)
    return render_template("main.html", title=data["ip_address"], city=data['city'])

if __name__ == "__main__":
    app.debug=True
    app.run()
    