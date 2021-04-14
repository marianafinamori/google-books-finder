const express = require('express');
const mongoose = require('mongoose');
const books = require('./routes/api/books')
const PORT = process.env.PORT || 5000;
const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// If deployed, use the deployed database. Otherwise use the local economist database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebookshooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
const checkdb = mongoose.connection;

// Check DB connection
checkdb.once('open', () => {
  console.log("Connected to mongoDB")
});

// Check for DB errors
checkdb.on("error", err => {
  console.log("this is the MongoDB connection err: " + err);
})

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebookshooks", { useNewUrlParser: true });

// Use routes
app.use('/api/books', books)

//START SERVER
app.listen(PORT, function() {
    console.log(`Server running on PORT ${PORT}`);
  });