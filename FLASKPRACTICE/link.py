from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("hello.html")

@app.route("/loop")

def loop():
    return render_template("loop.html")


