
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartProvider";


const Navbar = ({
  searchQuery,
  setSearchQuery,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { getTotalItems } = useCartContext();
  
  return (
    <header className="bg-white sticky-top">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
            <i className="bi bi-shop me-2"></i>ShopHub
          </Link>

          <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active fw-medium" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-none d-lg-flex align-items-center gap-3">
            <div className="position-relative">
              <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
              <input
                type="text"
                className="form-control ps-5 rounded-pill"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: "300px" }}
              />
            </div>
            <Link
              to="/cart"
              className="btn btn-primary position-relative rounded-pill px-3"
            >
              <i className="bi bi-cart me-1"></i>
              Cart
              {getTotalItems() > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>

          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="d-lg-none border-top py-3">
            <div className="mb-3">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <ul className="navbar-nav mb-3">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link
              to="/cart"
              className="btn btn-outline-primary position-relative"
            >
              <i className="bi bi-cart me-2"></i>
              Cart
              {getTotalItems() > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
