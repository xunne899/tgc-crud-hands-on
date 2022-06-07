const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
const database = require('./data');

const app = express();

app.set('view engine', 'hbs');

wax.on(hbs.handlebars);
wax.setLayoutPath('views/layouts');


//form
app.use(express.urlencoded({
    'extended':false
}))

app.get('/',function(req,res){
    res.send('All Books')
})

//get books
app.get('/books', function(req,res){
    let books = database.getAll()
    res.render('books.hbs', {
        'books': books
      })
})

// create get
app.get('/books/create', function (req,res){
    res.render('add-books.hbs');
  })
  
  // create post 
  app.post('/books/create', function (req,res){
      let title = req.body.title;
      let isbn =  req.body.isbn
   database.addBook(title, isbn)
   res.redirect('/books')
   
  })


//get books by id
app.get('/books/:id', function (req,res){
    let id = req.params.id;
    let books = database.getBook(id)
    res.render('get_id.hbs', {
        'books':books
    })
})
// post books by id
// app.post('/books/:id', function (req,res){
//     let id = req.params.id;
//     let books = database.getBook(id)
//  res.render('get-id.hbs', {
//     'books':books
// })
//  res.redirect('/books')
 
// })


  //update get 
  app.get('/books/update/:id', function(req,res){
    let id = req.params.id
    // let title = req.body.title;
    // let isbn =  req.body.isbn
    let books = database.getBook(id)
 res.render('update-books', {
    'books':books
})
  })

// update post
  app.post('/books/update/:id', function(req,res){
    let id = req.params.id
    let title = req.body.title;
    let isbn =  req.body.isbn
    let books = database.updateBook(id,title,isbn)
    res.render('update-books', {
        'books':books
    })
    res.redirect('/books')
})



app.get('/books/delete/:id',function(req,res){
    let id = req.params.id
    // let title = req.body.title;
    // let isbn =  req.body.isbn
    let books = database.getBook(id)
    res.render('delete-books',{
        'books':books
       })

})




app.post('/books/delete/:id',function(req,res){
    let id = req.params.id
    // let title = req.body.title;
    // let isbn =  req.body.isbn
    let books = database.deleteBook(id)
    res.render('delete-books',{
        'books':books
       })
       res.redirect('/books')
})


app.listen(3000, function(){
    console.log("Server has started");
})