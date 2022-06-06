const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
const database = require('./data');

const app = express();

app.set('view engine', 'hbs');

wax.on(hbs.handlebars);
wax.setLayoutPath('views/layouts');



app.use(express.urlencoded({
    'extended':false
}))

app.get('/', function(req,res){
    let books = database.getAll()
    res.render('books.hbs', {
        'books': books
      })
})

// create
app.get('/add', async(req,res)=>{
    res.render('add-books.hbs');
  })
  
  // post 
  app.post('/add', async(req,res)=>{
  
      let title = req.body.title;
      let isbn =  req.body.isbn
   database.addBook(title, isbn)
   res.redirect('/')
   
  })

app.listen(3000, function(){
    console.log("Server has started");
})