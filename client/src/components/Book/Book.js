import './Book.css'

const Book = ( { book, handleSaveButton, handleDeleteButton}) => {
    return (
            <div className="main fade-in-div">
            {/* <div className="col-lg-4 book-left d-flex align-content-center flex-wrap">  */}
            <div className="book-left"> 
                    <div className="cover-container">
                        <img src={book.image} alt="book cover"></img>
                    </div>
        
            </div>
            <div className="box-right"> 
                <h3 className='book-title'>{ book.title}</h3>
                <p className="description">{ book.description }</p>
                <span>Author(s): </span>
                <> 
                {book.authors.map(author => {
                    return <span className="author">{author}</span>
                })}
                </>
                <div>    
                    <a rel="noreferrer noopener" target="_blank" href={ book.link }>
                        <button className="google-btn">Go to Google Books</button>
                    </a>
                    {!book.saveStatus
                        ? <button id={book.id} className="save-btn" onClick={handleSaveButton}>Save book</button>
                        : <button id={book.id} className="delete-btn" onClick={handleDeleteButton}>Delete</button>
                    }
                </div>
            </div>
                        
        </div>
        // </CSSTransition>
        
    )
  }
  
  export default Book;