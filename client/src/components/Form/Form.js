import "./Form.css"

const Form = ({ getInput, searchBooks }) => {

  return (
    <div className="form-container">
       <div className="space-left"></div>
      <form className="form form-control" id="form">
        <input onChange={getInput} type="text" name="name" id="bookName" className="search-input" placeholder="TYPE HERE THE BOOK NAME"/>
        <input type="submit" value="SEARCH" onClick={searchBooks} className="search-btn"/>
      </form>
      <div className="space-right"></div>
    </div>
      

  );
};

export default Form;