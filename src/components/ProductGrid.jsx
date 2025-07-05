import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartContext } from "../context/CartProvider";

const ProductGrid = ({ products }) => {
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
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div className="card h-100 shadow-sm product-card hover-shadow">
            {/* Product Image */}
            <div className="position-relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top product-image"
                style={{ height: "250px", objectFit: "cover" }}
                loading="lazy"
              />

              {/* Overlay Actions */}
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center product-overlay">
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-light btn-sm rounded-circle shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add view details functionality
                    }}
                  >
                    <i className="bi bi-eye"></i>
                  </button>
                  <button 
                    className="btn btn-light btn-sm rounded-circle shadow-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add wishlist functionality
                    }}
                  >
                    <i className="bi bi-heart"></i>
                  </button>
                </div>
              </div>

              {/* Badges */}
              <div className="position-absolute top-0 start-0 p-2">
                {product.originalPrice && (
                  <span className="badge bg-danger">Sale</span>
                )}
                {product.stock < 10 && product.stock > 0 && (
                  <span className="badge bg-warning ms-1">Low Stock</span>
                )}
                {product.stock === 0 && (
                  <span className="badge bg-secondary">Out of Stock</span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="card-body d-flex flex-column">
              <h6 className="card-title text-truncate">{product.name}</h6>
              <p className="text-muted small text-capitalize">
                {product.category}
              </p>

              {/* Rating */}
              <div className="d-flex align-items-center mb-2">
                <div className="me-1">{renderStars(product.rating)}</div>
                <small className="text-muted">({product.rating})</small>
              </div>

              {/* Price */}
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center gap-2">
                  <span className="h6 mb-0 text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <small className="text-muted text-decoration-line-through">
                      ${product.originalPrice.toFixed(2)}
                    </small>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 0}
                className={`btn w-100 mt-auto ${
                  product.stock === 0 ? "btn-secondary" : "btn-primary"
                }`}
              >
                <i className="bi bi-cart-plus me-2"></i>
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;