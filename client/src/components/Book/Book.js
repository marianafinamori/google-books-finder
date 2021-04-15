import './Book.css'

const Book = ( { book, handleSaveButton, handleDeleteButton}) => {
    return (
            <div className="row justify-content-center fade-in-div">
            <div className="col-lg-4 book-left d-flex align-content-center flex-wrap"> 
                <div className="divCoverName"> 
                    <div className="coverContainer">
                        <img src={book.image} alt="book cover"></img>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 divSummary"> 
                <h3 className='book-title-right'>{ book.title}</h3>
                <p className="authors">{ book.description }</p>
                <span>Author(s): </span>
                <> 
                {book.authors.map(author => {
                    return <span className="author">{author}</span>
                })}
                </>
                <div>    
                    <a rel="noreferrer noopener" target="_blank" href={ book.link }>
                        <button className="googleBtn">Go to Google Books</button>
                    </a>
                    {!book.saveStatus
                        ? <button id={book.id} className="saveBtn" onClick={handleSaveButton}>Save book</button>
                        : <button id={book.id} className="deleteBtn" onClick={handleDeleteButton}>Delete</button>
                    }
                </div>
            </div>
                        
        </div>
        // </CSSTransition>
        
    )
  }
  
  export default Book;