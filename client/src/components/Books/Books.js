import Book from '../Book/Book'


const Books = ( { books, handleSaveButton, handleDeleteButton}) => {

    return (
      <div> 
          {books.map(book => 
            <Book 
              key={book.id} 
              book={book} 
              handleSaveButton={handleSaveButton}
              handleDeleteButton={handleDeleteButton}
            />
            )}
    
            
      </div>
    )
  }
  
  export default Books;