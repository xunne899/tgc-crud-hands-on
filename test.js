const data = require('./data');

let insertedId = data.addBook("Lord of the Rings", "123-123-123-123-123");
let b = data.getBook(insertedId);
console.log(b.title);
console.log(data.getAll());
data.updateBook(insertedId, "Lord of the Rings:Return of the King", "123123123123");
data.deleteBook(insertedId);
