#importing Flask
from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/test")
def index():
    return "..\front-end-files\western_ai\src\Home\Home.js"
