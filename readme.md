# Library App Hands On
In this Library App hands on, you are to write a CRUD application
for displaying, creating, updating and deleting a list of books.

Each book record has the following structure:
```
{
  "id": <id of the record>,
   "title": <title of the book>,
   "plot":<plot of the book>
}
```
For this lab, we will use files to represent the database. You can see each record
in the `scratch` directory after you run `nodemon` for the first time.

To access the database, you make use of the `data` object from the `data.js` module.
This has already been imported in `index.js`. Read the documentation for the `data.js` module at the end of this readme file.

# Questions
Create the CRUD for the library app. Add in the following features

* Display all books (one route)
* Add a new book (two routes, one to display the form, one to process the form)
* Update a book (two routes, one to display the form, one to process the form, the user should be able to select which book to update)
* Delete a book (two routes, one to display a confirmation screen, one to process the delete)
* Find a book by id (two routes, one to display the search form, one to display the details of the book)

# Documentation for the `data.js` module
You can check the `test.js` file to see how to use the functions provided by the `data` object.

To reset, the database, delete the `scratch` folder.

## get all books
```
data.getAll()
```
Returns an array of all the books in the database so far. Sample output:
```
[
  {
    id: 164423,
    title: 'Lord of the Rings',
    isbn: '123-123-123-123-123'
  }
]
```
## add a book
```
data.addBook("<title>", "<isbn>");
```
Add a new book to the database. This function will return the `id` of 
the newly inserted book.

## get a book by id
```
data.getBook(id)
```
Return the object that represents a book which
`id` matches the `id` parameter provided.

## update a book by id
```
data.updateBook(id, "<new title>", "<new isbn>")
```
Update an existing book with the provided `id`, setting its title to the `"<new title>"` and its ISBN to `"<new isbn>"` parameters

## delete book
```
data.deleteBook(id);
```
Delete the book with the `id` specified by the parameter.