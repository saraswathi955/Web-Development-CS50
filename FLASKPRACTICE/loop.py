from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")

def index():
    names = ["saru","favorite","red","purple"]
    return render_template("loop.html", names=names)

