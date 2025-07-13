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
            <p className="text-white">
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
                <Link to="/products" className="text-white text-decoration-none">
                  All Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/categories" className="text-white text-decoration-none">
                  Categories
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/best-sellers" className="text-white text-decoration-none">
                  Best Sellers
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/help" className="text-white text-decoration-none">
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/returns" className="text-white text-decoration-none">
                  Returns and Refund
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Newsletter</h5>
            <p className="text-white">
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
        <div className="text-center text-white">
          <small>
            &copy; {new Date().getFullYear()} ShopHub. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
