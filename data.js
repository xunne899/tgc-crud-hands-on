const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch');
const database = {
    'getAll': function () {
        let books = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let book = JSON.parse(localStorage.getItem(key));
            books.push(book);
        }
        return books;
    },
    'addBook': function (title, isbn) {
        let id = Math.floor(Math.random() * 100000 + 99999);
        localStorage.setItem(id, JSON.stringify({
            'id': id,
            'title': title,
            'isbn': isbn
        }))
        return id;
    },
    'getBook': function (id) {
        let rawString = localStorage.getItem(id);
        if (rawString) {
            return JSON.parse(rawString);
        } else {
            return {};
        }

    },
    'updateBook': function (id, title, isbn) {
        if (localStorage.getItem(id)) {
            localStorage.setItem(id, JSON.stringify({
                'id': id,
                'title': title,
                'isbn': isbn
            }))
        }

    },
    'deleteBook': function (id) {
        localStorage.removeItem(id);
    }
}

module.exports = database;