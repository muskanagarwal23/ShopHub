import React from "react";
import ProductGrid from "../ProductGrid";
import { Link } from "react-router-dom";

const FeaturedProducts = ({ products = [], onAddToCart, onViewAll }) => {
  // Show only first 4 featured products
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h3 mb-0">Featured Products</h2>
          <Link 
            to="/products" 
            className="btn btn-outline-primary"
            onClick={onViewAll}
          >
            View All Products
          </Link>
        </div>
        
        {featuredProducts.length > 0 ? (
          <ProductGrid 
            products={featuredProducts} 
            onAddToCart={onAddToCart} 
            className="row-cols-1 row-cols-md-2 row-cols-lg-4"
          />
        ) : (
          <div className="text-center py-4">
            <p className="text-muted">No featured products available</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;