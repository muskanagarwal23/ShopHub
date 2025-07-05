import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">
              <i className="bi bi-shop me-2"></i>ShopHub
            </h5>
            <p className="text-muted">
              Your one-stop shop for all your needs. Quality products at
              affordable prices.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Shop</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/products" className="text-muted text-decoration-none">
                  All Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/categories" className="text-muted text-decoration-none">
                  Categories
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  New Arrivals
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  Featured
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  FAQs
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  Shipping
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Newsletter</h5>
            <p className="text-muted">
              Subscribe to get updates on new products and special offers
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="text-center text-muted">
          <small>
            &copy; {new Date().getFullYear()} ShopHub. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;