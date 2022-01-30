const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-success navbar-expand-lg fixed-top py-1">
      <div className="container-lg">
        <h1 className="navbar-brand fw-bold fs-5 p-0 m-0">FNSscientific</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-links"
          aria-controls="nav-links"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="nav-links"
        >
          <ul className="navbar-nav fw-bold">
            <li className="nav-item text-center">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="#" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="#" className="nav-link">
                Events
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="#" className="nav-link">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
