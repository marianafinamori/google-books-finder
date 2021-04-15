import Book from '../Book/Book'
import './Books.css'

const Books = ( { books, handleSaveButton, handleDeleteButton}) => {

    return (
      <div> 
          {books.map(book => 
              <Book 
                key={book.googleid} 
                book={book} 
                handleSaveButton={handleSaveButton}
                handleDeleteButton={handleDeleteButton}
              />
              
            )}
    
            
      </div>
    )
  }
  
  export default Books;