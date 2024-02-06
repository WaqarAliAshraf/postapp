import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="fa-solid fa-house"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  work <i className="fa-solid fa-briefcase"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  services <i className="fa-solid fa-mug-hot"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  about <i className="fa-solid fa-heart"></i>
                </a>
              </li>
            </ul>
            <div className="nav-buttons ms-auto">
              <a href="/" className="blog">
                blog <i className="fa-solid fa-message"></i>
              </a>
              <a href="/" className="planner">
                planner <i className="fa-solid fa-leaf"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


























