import time
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return '<H2>hello world</H2>'

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5002)