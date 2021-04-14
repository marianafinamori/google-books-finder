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
            {/* <li className="link-container nav-item">
                <a className="nav-link" href="/">SEARCH</a>
            </li> */}
            <li className="link-container nav-item nav-link" onClick={searchLink}>SEARCH</li>
            <li className="link-container nav-item nav-link" onClick={saveLink}>SAVED</li>  
            {/* <li className="link-container nav-item">
                <a className="nav-link" href="/saved">SAVED</a>
            </li>   */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;