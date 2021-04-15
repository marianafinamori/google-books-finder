import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Form from '../../components/Form/Form'
import Books from '../../components/Books/Books'
import API from '../../utils/API'
import './Main.css'


const Main = () => {
  let [query, setQuery] = useState("")
  let [books, setBooks] = useState([])
  let [command, setCommand] = useState()
  let [failure, setFailure] = useState(0)
  let [name, setName] = useState("")


  const getInput = (event) => {
    setFailure(0)
    let input = event.target.value
    setName(input.toUpperCase())
    query = input.toLowerCase().replace(/\s/g,'')
    setQuery(query)
  }


  //Search books
  const searchBooks = (e) => {
    e.preventDefault()
    console.log(`THIS IS THE ${query}`)
    API.googleBooks(query) 
      .then(res => {
        setCommand("all")
        console.log(res.data.length)
        res.data.length!==0 ? setData(res) : setFailure(1)
      })
      setTimeout(resetForm(), 2000)
  }
  
  //Set data coming from DB
  const setData = res => {
    setFailure(0)
    let searchedBooks = []
    res.data.map(book => {
      let searchedBook = {
        id: book._id,
        googleid: book.googleid,
        title:book.title,
        authors:book.authors,
        description:book.description,
        image: book.image,
        link:book.link,
        saveStatus: book.saved
      }
      searchedBooks.push(searchedBook)
      return searchedBooks
    })
        // console.log(searchedBooks)
    setBooks(searchedBooks)
  }

  
  //Clear form
  const resetForm = () => {
          console.log("is reseting")
          document.querySelector("#form").reset()
  }
       
  //Save a book
  const handleSaveButton = (event) => {
    let id = event.target.id
    API.saveBook(id)
      .then(res=> {
        // alert('saved')
        setCommand('all')
        API.getBooksDB(command)
          .then(res => {
          setData(res)
          })
      })
  }

  //Get results of last search when "search link" is clicked
  const searchLink = (e) => {
    setCommand('all')
  }

  //Get saved books
  const saveLink = (e) => {
    setCommand('saved')
  }

  //Get books from DB
  useEffect(() => {
    getBooks(command)
    //Clean useEffect
    return () => {
      console.log("Clean useEffect")
    }
  }, [command])

  // Get books from mongoDB 
  const getBooks = (command) => {
    API.getBooksDB(command)
      .then(res => {
        setData(res)
      })
  }

 //Delete book 
 const handleDeleteButton = (event) => {
    let id = event.target.id
    console.log("The delete id is:" + id)
    API.unsaveBook(id)
      .then(res => {
        setCommand('saved')
        API.getBooksDB(command)
          .then(res => {
            setData(res)
          })
      })
  }
  
  return (
    <div>
      <Navbar
      searchLink={searchLink}
      saveLink={saveLink}
      />
      <Form 
      query={query}
      getInput={getInput}
      searchBooks={searchBooks}
      />
      {failure===1
        ? <div id='sorry-msg' className='no-books'>Sorry. We couldn't find {name}</div>
        : <div>
      {command==='all' 
        ? <div className="page-title">Last search</div>
        :<div></div>
      } 
      {command==='saved' 
        ? <div className="page-title">Saved books</div>
        :<div></div>
      } 
      <Books 
      books={books} 
      handleSaveButton={handleSaveButton}
      handleDeleteButton={handleDeleteButton}
      />
      </div>}
    </div>

  )
}

  export default Main;