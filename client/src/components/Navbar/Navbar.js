import "./Navbar.css";

const Navbar = ({ searchLink, saveLink }) => {
  return (
    <div> 
      <header className="justify-content-center sticky-top">
        <div className="logo">
          <h1>Google Books Finder</h1>
        </div>
      </header>
      <div className="nav-container">
        <ul className="nav justify-content-center">
            <li className="link-container nav-item nav-link" onClick={searchLink}>SEARCH</li>
            <li className="link-container nav-item nav-link" onClick={saveLink}>SAVED</li>  
        </ul>
      </div>
    </div>
  )
}

export default Navbar;