 const express = require('express');
 const router = express.Router();
 const bodyParser = require('body-parser')

 //Book Model

 const Books = require('../../models/Books');

 //To Get a book request
 //@routers  GET Book api/book
 //@desc GET All Book
 router.get('/', async (req, res) => {
    try{
        const books = await Books.find(); 
           if(!books)throw Error('No itens')
           res.status(200).json(books)
       }catch{
           res.status(400).json({ msg: err })
    }
});

//To Get a specific book 
//@routers GET Book api/book/id

 router.get('/:id', async (req, res) => {
    try{
        const book = await Books.findById(req.params.id); 
           if(!book)throw Error('No itens')
           res.status(200).json(book)
       }catch{
           res.status(400).json({ msg: err })
    }
});

 //Create a book request
 //@routers Book api/book
 //@desc Create an Book
 router.post('/', async (req, res) => {
     //just to check:  console.log(req.body);
     const newBook = new Books(req.body);
     try{
         const book = await newBook.save(); 
            if(!book)throw Error('There is something wrong')
            res.status(200).json(book)
        }catch{
            res.status(400).json({ msg: err })
     }
 });

 //To Delete an book 
 //@routers  Delete Book api/book/:id
 router.delete('/:id', async (req, res) => {
    try{
        const book = await Books.findByIdAndDelete(req.params.id); 
           if(!book)throw Error('No books found!')
           res.status(200).json({success: true})
       }catch{
           res.status(400).json({ msg: err })
    }
});

//To Update an book 
 //@routers  Update Book api/book/:id
 router.patch('/:id', async (req, res) => {
    try{
        const book = await Books.findByIdAndUpdate(req.params.id, req.body); 
           if(!book)throw Error('Something went wrong while updating!')
           res.status(200).json({success: true})
       }catch{
           res.status(400).json({ msg: err })
    }
});

/*Creating direct here 
Books.findOne({name: 'Dom'}, function(err, result){
    if (err) throw err;

    let b1 = new Books({
        title:'Dom Quixote',
        author:'Miguel de Cervantes',
        price: 18.99,
        available: false,
        copies: 0
    });
    b1.save(function(err){
        if(err) throw err;
        console.log('add to db')
    });
});*/

 module.exports = router;

