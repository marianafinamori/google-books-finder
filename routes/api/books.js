const express = require('express');
const router = express.Router();
const axios = require('axios')

// Book Model
const Book = require('../../models/Book');

// Homepage
router.get("/:query", (req, res) => {
    let query = req.params.query
    console.log(query)
    Book.deleteMany({saved: false}, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            searchAndSave(query)
            setTimeout(() => {Book.find({saved: false}, (err, books) => {
                if(err) {
                    console.log(err) 
                } else {
                    res.json(books)
                }
            })}, 2500)

        }
    })
})

//Find all books searched and save in the DB 
router.get("/db/all", (req, res) => {
    Book.find({saved: false}, (err, books) => {
        err ? console.log(err) : res.json(books)
    }) 
})

// Search and Save to DB
const searchAndSave = (query) => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    .then(res => {
        saveSearchedBooks(res)
    });
}

//Save searched books to DB
const saveSearchedBooks = (res) => {
    if (res.data.items)  { 
      let searchedBooks = []
        res.data.items.map(item => {
            let newBook = new Book({
                googleid: item.id.toLowerCase(),
                title:item.volumeInfo.title,
                authors:item.volumeInfo.authors,
                description:item.volumeInfo.description,
                image: item.volumeInfo.imageLinks.smallThumbnail,
                link:item.volumeInfo.infoLink
            })
            Book.insertMany(newBook)
          })
         } else if (!res.data.items) {
             console.log("book not found")
         }
  }

//Route to get SAVED BOOKS
router.get("/db/saved", (req, res) => {
    Book.find({saved: true}, function(err, books) {
        if(err) {
            console.log(err) 
        } else {
            res.json(books)
        }
    })
})

//SAVE book
router.put("/db/statussaved/:id", (req, res) => {
    saveStatus(true,req, res);
});
  
//UNSAVE book
router.put("/db/statusnotsaved/:id", (req, res) => {
    saveStatus(false, req, res);
});
  
const saveStatus = (isSaved, req, res) => {
    Book.findOneAndUpdate({ _id: req.params.id }, { saved: isSaved },
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });
    }

module.exports = router;
