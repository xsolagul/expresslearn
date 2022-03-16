const mongoose = require('mongoose')
const Schema = mongoose.Schema

const books = new Schema({
  id: String,
  name: String,
})

const BookModel= mongoose.model('books', books)

module.exports = BookModel