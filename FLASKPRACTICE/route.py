from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "hello world!!!"

@app.route("/saru")
def saru():
    return "hello saru"

@app.route("/laxmi")
def laxmi():
    return "hello laxmi"
