from flask import Flask
from flask_socketio import SocketIO, emit
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'

socketio = SocketIO(app, cors_allowed_origins='*')

dataBase = {

}

@socketio.on('connect')
def initData():
    emit("connect", dataBase)

@socketio.on('command')
def handleCommand(data):
    emit("test_channel", "Tair")
    print(data)

@socketio.on('hello')
def handleHello(data):
    print(data)

if __name__ == '__main__':
    socketio.run(app, port=5000, host='0.0.0.0')

