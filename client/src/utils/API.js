import axios from "axios";

export default  {
    //Gets books from Google Books API, save to DB and get them from DB
    googleBooks: (query) => {
        return axios.get("/api/books/" + query)
    },

    //Get books from DB
    getBooksDB: (command) => {
        console.log(command)
        return axios.get("/api/books/db/" + command)
    },

    //Save a book to the database
    saveBook: (id) => {
        return axios.put("/api/books/db/statussaved/" + id);
    },

    //Unsave the book from favorites list
    unsaveBook: (id) => {
        console.log(id)
        return axios.put("/api/books/db/statusnotsaved/" + id)
    }
   
};