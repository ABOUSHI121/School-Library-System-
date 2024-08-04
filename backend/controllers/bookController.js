const Book = require('../models/Book');

// Add a new book
exports.addBook = async (req, res) => {
  const { title, author, category } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      category,
    });
    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get books by category
exports.getBooksByCategory = async (req, res) => {
  try {
    const books = await Book.find({ category: req.params.category });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Search books by title
exports.searchBooksByTitle = async (req, res) => {
  try {
    const books = await Book.find({ title: new RegExp(req.params.title, 'i') });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
