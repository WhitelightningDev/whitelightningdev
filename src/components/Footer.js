import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Footer() {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          {/* Section Links */}
          <div className="col-7 col-md-4 mb-3 m-3">
            <h5 className="text-light">Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-light">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">About</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">FAQs</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-8 col-md-4 col-sm-4 offset-md-2 mb-3 m-3">
            <form>
              <h5 className="text-light">Subscribe to our newsletter</h5>
              <p className="text-light">
                Monthly digest of what's new and exciting from us.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-light">
          <p>&copy; 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-light" href="#">
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-light" href="#">
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-light" href="#">
                <i className="bi bi-facebook fs-4"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
