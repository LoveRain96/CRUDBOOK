const express = require('express');
const router = express.Router();
const BookController = require('../http/controller/book-api/book-controller');
const check = require('../http/middlerware');

let bookController = new BookController();

router.get('/books', check.searchCondition, bookController.search);

router.get('/book/:id',check.searchCondition, bookController.search);

router.post('/book', check.bookRequest, check.checkNull, check.checkLength, bookController.createBook);

router.put('/book/:id', check.bookRequest, check.checkNull, check.checkLength, bookController.editBook);

router.delete('/book/:id', bookController.deleteBook);

router.get('/search-advance', check.searchCondition, bookController.search);

router.get('/search-basic', check.searchCondition, bookController.search);

module.exports = router;
