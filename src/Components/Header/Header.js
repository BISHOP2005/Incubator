import React from 'react';
import './header.css';
const Header = () => {
  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      {/* Boxicons CSS */}
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/public/BW Logo.png" alt="Logo" style={{ height: '80px', width: 'auto' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Navigation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Our Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Programs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              <div className="footer-about">
                <div className="footer-logo">
                  <img src="/public/BW Logo.png" alt="not found" />
                </div>
                <p>DhaRti Foundation</p>
              </div>
              <ul className="social-content">
                <li className="social-item">
                  <a href="#" target="_blank">
                    <i className="bx bxl-facebook-square"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" target="_blank">
                    <i className="bx bxl-gmail"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" target="_blank">
                    <i className="bx bxl-linkedin-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Header;
