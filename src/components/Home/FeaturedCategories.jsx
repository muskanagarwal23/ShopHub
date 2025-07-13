// FeaturedCategories.jsx
import React from "react";
import { Link } from "react-router-dom";

const FeaturedCategories = ({ categories = [], onCategoryClick }) => {
  const featuredCategories = [
    {
      id: "electronics",
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1201&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCount: 42,
    },
    {
      id: "fashion",
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCount: 36,
    },
    {
      id: "home",
      name: "Home & Living",
      image: "https://plus.unsplash.com/premium_photo-1723200799213-e6cff0c3e641?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCount: 28,
    },
    {
      id: "sports",
      name: "Sports",
      image: "https://plus.unsplash.com/premium_photo-1684820878202-52781d8e0ea9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productCount: 19,
    },
  ];

  return (
    <section className="container py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
        <h2 className="h3 mb-3 mb-md-0 fw-bold text-gray-800">Shop by Category</h2>
        <Link 
          to="/categories" 
          className="btn btn-outline-primary rounded-pill px-4"
        >
          View All Categories
        </Link>
      </div>
      <div className="row g-4">
        {featuredCategories.map((category) => (
          <div className="col-6 col-md-4 col-lg-3" key={category.id}>
            <div 
              className="card h-100 border-0 shadow-sm overflow-hidden transition-all hover-shadow cursor-pointer"
              onClick={() => onCategoryClick?.(category.id)}
            >
              <div className="position-relative" style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={category.image}
                  className="img-fluid w-100 h-100 object-cover"
                  alt={category.name}
                  style={{ transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-gradient-dark text-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-semibold">{category.name}</h5>
                    <span className="badge bg-primary rounded-pill">{category.productCount} items</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;