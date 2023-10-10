const express = require("express")
const router = express.Router()

const books = [
    {id: 1, name: "In Search of Lost Time", author: "Marcel Proust"},
    {id: 2, name: "Ulysses", author: "James Joyce"},
    {id: 3, name: "Don Quixote", author: "Miguel de Cervantes"},
    {id: 4, name: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez"},
]

router
    .route("/")
    .get((req, res) => {
        res.status(200).json(books);
    })
    .post((req, res) => {
        const newBook = {
            id: books.length+1,
            name: req.body.name,
            author: req.body.author,
        }
        books.push(newBook)
        res.status(200).json(newBook);
    })

router
    .route("/:id")
    .get( (req, res) => {
        const bookId = parseInt(req.params.id)
        const book = books.find( book => book.id === bookId )

        if(!book){
           return res.status(405).json({error : 'Book not found'})
        }

        res.status(202).json(book)
    } )
    .put( (req, res) => {
        const bookId = parseInt(req.params.id)
        const book = books.find(book => book.id === bookId)

        if(!book){
            return res.status(404).json({error: 'Book not found'})
        }

        book.name = req.body.name
        book.author = req.body.author

        res.status(200).json(book)
    } ) 
    .delete( (req, res) => {
        const bookId = parseInt(req.params.id)
        const bookIndex = books.findIndex(book => book.id === bookId)

        if(bookIndex === -1){
            return res.status(404).json({error: 'Book not found'})
        }

        const deletedBook = books[bookIndex]
        books.splice(bookIndex, 1)
        res.status(200).json(deletedBook)
    } )   




module.exports = router