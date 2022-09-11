from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'

socketio = SocketIO(app, cors_allowed_origins='*')

dataBase = {
    "users": [ 
        {"id": 0,"fullname": "Daniel Hasdiel","age": 24,"genre": "fantasy","isManager": True,"pastBooks": [0,3,4], "hasBooks": [2,5,6]},
        {"id": 1,"fullname": "Peter Parker","age": 19,"genre": "action","isManager": False,"pastBooks": [1,2,7] , "hasBooks": [5,6]},
        {"id": 2,"fullname": "Bruce Wayne","age": 40,"genre": "biography","isManager": False,"pastBooks": [0] , "hasBooks": [4,6]},
        {"id": 3,"fullname": "Tony Stark", "age": 43, "genre": "novel", "isManager": False ,"pastBooks": [3,11,12,8] , "hasBooks": [0]}, ],
    "books": [
        {"id": 0, "title": "Lord Of The Rings", "author": "Tolkien, J.R.", "genre": "fantasy", "quanity": 30, "borrowNow": 12},
        {"id": 1,"title": "Northanger Abbey", "author": "Austen, Jane",  "genre": "novel", "quanity": 21, "borrowNow": 8},
        {"id": 2, "title": "War and Peace", "author": "Tolstoy, Leo",  "genre": "fantasy", "quanity": 1, "borrowNow": 5},
        {"id": 3,"title": "Anna Karenina", "author": "Tolstoy, Leo", "genre": "novel", "quanity": 5 ,"borrowNow": 2},
        {"id": 4,"title": "Mrs. Dalloway", "author": "Woolf, Virginia",  "genre": "action", "quanity": 23 ,"borrowNow": 21},
        {"id": 5,"title": "The Hours", "author": "Cunnningham, Michael",  "genre": "thriller", "quanity": 15 ,"borrowNow": 12},
        {"id": 6,"title": "Huckleberry Finn", "author": "Twain, Mark",  "genre": "action", "quanity": 6 ,"borrowNow": 14},
        {"id": 7,"title": "Bleak House", "author": "Dickens, Charles",  "genre": "fantasy", "quanity": 42 ,"borrowNow":2},
        {"id": 8,"title": "Tom Sawyer", "author": "Twain, Mark",  "genre": "biography", "quanity": 13 ,"borrowNow": 12},
        {"id": 9,"title": "A Room of One's Own", "author": "Woolf, Virginia", "genre": "finance", "quanity": 14 ,"borrowNow": 12},
        {"id": 10,"title": "Harry Potter", "author": "Rowling, J.K.",  "genre": "horror", "quanity": 51 ,"borrowNow": 6},
        {"id": 11,"title": "One Hundred Years of Solitude", "author": "Marquez",  "genre": "fantasy", "quanity": 32 ,"borrowNow": 0},
        {"id": 12,"title": "Hamlet, Prince of Denmark", "author": "Shakespeare",  "genre": "novel", "quanity": 11 ,"borrowNow": 7},]
}

def find_in_dataBase(data, obj):
    for index in range(len(dataBase[data])):
        if dataBase[data][index]["id"] == obj["id"]:
            return index

@socketio.on('connect')
def initData():
    emit("connect", dataBase)

def update_database_users():
    socketio.emit("update_users", dataBase["users"])

def update_database_books():
    socketio.emit("update_books", dataBase["books"])

@socketio.on("change")
def handle_change(changedUser):
    for user in dataBase["users"]:
        if user["id"] == changedUser["id"]:
            dataBase["users"].remove(user)
            dataBase["users"].append(changedUser)
    print("Changed details of user")
    update_database_users()

@socketio.on("borrow")
def handle_borrow(borrowAction):
    book_index = find_in_dataBase("books", borrowAction["book"])
    dataBase["books"][book_index]["quanity"] -=1 
    dataBase["books"][book_index]["borrowNow"] +=1 
    user_index = find_in_dataBase("users", borrowAction["user"])
    dataBase["users"][user_index]["hasBooks"].append(borrowAction["book"]["id"])
    print("Borrow complete!")
    update_database_users()
    update_database_books()


@socketio.on("return")
def handle_return(return_action):
    book_index = find_in_dataBase("books", return_action["book"])
    dataBase["books"][book_index]["quanity"] +=1 
    dataBase["books"][book_index]["borrowNow"] -=1 
    user_index = find_in_dataBase("users", return_action["user"])
    dataBase["users"][user_index]["hasBooks"].remove(return_action["book"]["id"])
    if not return_action["book"]["id"] in dataBase["users"][user_index]["pastBooks"]:
         dataBase["users"][user_index]["pastBooks"].append(return_action["book"]["id"])
    print("Return complete!")
    update_database_books()
    update_database_users()

@socketio.on("adduser")
def handle_add_user(new_user):
    dataBase["users"].append(new_user)
    print("User added")
    update_database_users()

@socketio.on("addbook")
def handle_add_book(new_book):
    dataBase["books"].append(new_book)
    print("Book added")
    update_database_books()

@socketio.on("removeuser")
def handle_remove_user(removed_user):
    dataBase["users"].remove(removed_user)
    print("User removed")
    update_database_users()

@socketio.on("removebook")
def handle_remove_book(removed_book):
    dataBase["books"].remove(removed_book)
    print("Book removed")
    update_database_books()

if __name__ == '__main__':
    socketio.run(app, port=5000, host='0.0.0.0')

