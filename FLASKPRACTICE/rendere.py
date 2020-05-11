from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def index():
    headline="helloworld"
    return render_template("hello.html", headline = headline)


@app.route("/bye")
def bye():
    headline = "goodbye"
    return render_template("hello.html", headline = headline)
