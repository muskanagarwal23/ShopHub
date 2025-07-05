import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartContext } from "../context/CartProvider";

const ProductList = ({ products }) => {
  const { addToCart } = useCartContext();

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < Math.floor(rating) ? "text-warning" : "text-muted"}
      >
        ★
      </span>
    ));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="d-flex flex-column gap-4">
      {products.map((product) => (
        <div key={product.id} className="card shadow-sm hover-shadow">
          <div className="row g-0">
            {/* Product Image */}
            <div className="col-md-3">
              <div className="position-relative overflow-hidden h-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid h-100 w-100"
                  style={{ objectFit: "cover", minHeight: "200px" }}
                  loading="lazy"
                />

                {/* Badges */}
                <div className="position-absolute top-0 start-0 p-2">
                  {product.originalPrice && (
                    <span className="badge bg-danger mb-1">Sale</span>
                  )}
                  {product.stock < 10 && product.stock > 0 && (
                    <span className="badge bg-warning mb-1">Low Stock</span>
                  )}
                  {product.stock === 0 && (
                    <span className="badge bg-secondary">Out of Stock</span>
                  )}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="col-md-9">
              <div className="card-body h-100 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h5 className="card-title mb-1">{product.name}</h5>
                    <p className="text-muted small text-capitalize">
                      {product.category}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-outline-secondary btn-sm rounded-circle"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add view details functionality
                      }}
                    >
                      <i className="bi bi-eye"></i>
                    </button>
                    <button 
                      className="btn btn-outline-secondary btn-sm rounded-circle"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add wishlist functionality
                      }}
                    >
                      <i className="bi bi-heart"></i>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="card-text text-muted mb-3"
                  style={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {product.description}
                </p>

                {/* Rating */}
                <div className="d-flex align-items-center mb-3">
                  <div className="me-2">{renderStars(product.rating)}</div>
                  <small className="text-muted">
                    ({product.rating}) • {product.reviews} reviews
                  </small>
                </div>

                {/* Features */}
                {product.features && (
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="badge bg-light text-dark">
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Price and Actions */}
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="d-flex align-items-center gap-2">
                    <span className="h4 mb-0 text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="h6 text-muted text-decoration-line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                        <span className="badge bg-success">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    className={`btn ${
                      product.stock === 0 ? "btn-secondary" : "btn-primary"
                    }`}
                  >
                    <i className="bi bi-cart-plus me-2"></i>
                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;