from flask import Flask
from flask_socketio import SocketIO, emit
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'

socketio = SocketIO(app, cors_allowed_origins='*')

dataBase = {
    "users": [ 
        {"id": 0,"fullname": "Daniel Hasdiel","age": 24,"genre": ["fantasy"],"isManager": True,"pastBooks": [0,3,4]},
        {"id": 1,"fullname": "Peter Parker","age": 19,"genre": ["sci-fi"],"isManager": False,"pastBooks": [1,2,7]},
        {"id": 2,"fullname": "Bruce Wayne","age": 40,"genre": ["finance"],"isManager": False,"pastBooks": [0]},
        {"id": 3,"fullname": "Tony Stark", "age": 43, "genre": ["tech"], "isManager": False ,"pastBooks": [3,11,12,8]},],
    "books": [
        {"id": 0, "title": "Lord Of The Rings", "author": "Tolkien, J.R.", "genre": ["fantasy"], "isBorrow": True },
        {"id": 1,"title": "Northanger Abbey", "author": "Austen, Jane",  "genre": ["fantasy"], "isBorrow": True},
        {"id": 2, "title": "War and Peace", "author": "Tolstoy, Leo",  "genre": ["fantasy"], "isBorrow": False},
        {"id": 3,"title": "Anna Karenina", "author": "Tolstoy, Leo", "genre": ["fantasy"], "isBorrow": True},
        {"id": 4,"title": "Mrs. Dalloway", "author": "Woolf, Virginia",  "genre": ["fantasy"], "isBorrow": True},
        {"id": 5,"title": "The Hours", "author": "Cunnningham, Michael",  "genre": ["fantasy"], "isBorrow": False},
        {"id": 6,"title": "Huckleberry Finn", "author": "Twain, Mark",  "genre": ["fantasy"], "isBorrow": True},
        {"id": 7,"title": "Bleak House", "author": "Dickens, Charles",  "genre": ["fantasy"], "isBorrow": False},
        {"id": 8,"title": "Tom Sawyer", "author": "Twain, Mark",  "genre": ["fantasy"], "isBorrow": True},
        {"id": 9,"title": "A Room of One's Own", "author": "Woolf, Virginia", "genre": ["fantasy"], "isBorrow": False},
        {"id": 10,"title": "Harry Potter", "author": "Rowling, J.K.",  "genre": ["fantasy"], "isBorrow": False},
        {"id": 11,"title": "One Hundred Years of Solitude", "author": "Marquez",  "genre": ["fantasy"], "isBorrow": True},
        {"id": 12,"title": "Hamlet, Prince of Denmark", "author": "Shakespeare",  "genre": ["fantasy"], "isBorrow": False},]
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

