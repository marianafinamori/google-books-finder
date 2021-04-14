import "./Form.css"

const Form = ({ getInput, searchBooks }) => {

  return (
      <form className="form form-control" id="form">
        <input onChange={getInput} type="text" name="name" id="bookName" placeholder="TYPE HERE THE BOOK NAME"/>
        <input type="submit" value="SEARCH" onClick={searchBooks} className="search-btn"/>
      </form>

  );
};

export default Form;