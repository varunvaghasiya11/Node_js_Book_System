const Book = require("../model/bookmodel");

const getAllBooks = async (req, res) => {
    const books = await Book.find({});
    res.render("index", { books, editBook: null });
};

const addBook = async (req, res) => {
    const books = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        image: req.file.filename
    }
    const bookscopy = await new Book(books);
    bookscopy.save();
    res.redirect("/");
};

const editBook = async (req, res) => {
    const id = req.params.id;
    const books = await Book.find({});
    const editBook = await Book.findById({ _id: id });
    res.render("index", { books, editBook });
};

const updateBook = async (req, res) => {
    const id = req.params.id;
    let obj = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        image: req.file.path
    }
    await Book.findByIdAndUpdate(id, obj);
    res.redirect("/");
};


const deleteBook = async (req, res) => {
    const id = req.params.id;
    let deletebook = await Book.findByIdAndDelete(id);
    res.redirect("/");
};

const viewBook = async (req, res) => {
    const id = req.params.id;
    const books = await Book.find({});
    const book = await Book.findById({ _id: id });
    res.render("view", { book, books });
};

module.exports = {
    getAllBooks, addBook, editBook, updateBook, deleteBook, viewBook
};
