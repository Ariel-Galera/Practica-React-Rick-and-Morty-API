import React from 'react'

const Navbar = () => {
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <ul className="nav me-auto">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <span className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark">
          <img
            className="App-logo"
            height="52"
            src="dog.png"
            alt="perro-giratorio"
          />
        </span>

        <form className="mb-3 mb-md-0">
          <input
            type="search"
            className="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>

  )
}

export default Navbar
