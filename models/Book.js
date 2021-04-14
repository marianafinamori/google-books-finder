const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  googleid: { 
    type: String,
    required: true },

  title: {
    type: String,
    required: true
  },
  
  authors: {
    type: Array,
    required: true
  },

  description: {
    type: String
  },

  image: {
      type: String,
      required: true
  },

  link: {
      type: String,
      required: true
  },

  saved: {
    type: Boolean,
    required: true, 
    default: false
  }

});

const Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;