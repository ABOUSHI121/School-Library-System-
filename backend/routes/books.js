const express = require('express');
const router = express.Router();
const { addBook, getBooks, getBooksByCategory, searchBooksByTitle } = require('../controllers/bookController');
const auth = require('../middleware/auth');

// @route    POST api/books
// @desc     Add a new book
// @access   Private
router.post('/', auth, addBook);

// @route    GET api/books
// @desc     Get all books
// @access   Public
router.get('/', getBooks);

// @route    GET api/books/category/:category
// @desc     Get books by category
// @access   Public
router.get('/category/:category', getBooksByCategory);

// @route    GET api/books/search/:title
// @desc     Search books by title
// @access   Public
router.get('/search/:title', searchBooksByTitle);

module.exports = router;
