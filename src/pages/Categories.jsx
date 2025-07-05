import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Cart from '../pages/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Categories = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
      productCount: 42,
      description: 'Latest gadgets and tech accessories'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80',
      productCount: 36,
      description: 'Trendy clothing for all occasions'
    },
    {
      id: 'home',
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
      productCount: 28,
      description: 'Everything to make your home beautiful'
    },
    {
      id: 'sports',
      name: 'Sports & Outdoors',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
      productCount: 19,
      description: 'Gear for your active lifestyle'
    },
    {
      id: 'beauty',
      name: 'Beauty & Personal Care',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
      productCount: 24,
      description: 'Products to help you look and feel your best'
    },
    {
      id: 'toys',
      name: 'Toys & Games',
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&q=80',
      productCount: 15,
      description: 'Fun for kids and families'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar setIsCartOpen={setIsCartOpen} getTotalItems={getTotalItems} />

      <main className="flex-grow-1">
        {/* Breadcrumb */}
        <div className="bg-white border-bottom py-3">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Categories</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container py-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Shop by Category</h1>
            <p className="lead text-muted">Browse our wide range of product categories</p>
          </div>

          <div className="row g-4">
            {categories.map((category) => (
              <div key={category.id} className="col-md-6 col-lg-4">
                <div 
                  className="card h-100 border-0 shadow-sm transition-all hover-shadow cursor-pointer"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="img-fluid w-100 h-100 object-cover"
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-50 text-white">
                      <h3 className="h4 mb-0">{category.name}</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-3">{category.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-primary rounded-pill">{category.productCount} products</span>
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/products?category=${category.id}`);
                        }}
                      >
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      
    </div>
  );
};

export default Categories;