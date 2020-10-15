# Team Hairy Owls(Ethan Shenker, Arib Chowdhury, Jon Lee)
# SoftDev
# K13 - - Template for Success
# 2020-10-15

from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def main():
    return render_template("occupations.html", title="Occupations")


if __name__ == "__main__":
    app.debug = True
    app.run()
