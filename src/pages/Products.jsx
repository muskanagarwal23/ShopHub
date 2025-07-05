import React, { useState,useEffect } from 'react';
import { useNavigate,Link,useLocation } from 'react-router-dom';

import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';
import ProductList from '../components/ProductList';
import SearchFilters from '../components/SearchFilters';
import Cart from '../pages/CartPage';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Sidebar from '../components/common/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useCartContext } from '../context/CartProvider';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  const { cart, addToCart,getTotalItems } = useCartContext();
  const { products, filteredProducts, categories } = useProducts(searchQuery, selectedCategory, priceRange);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
       
        getTotalItems={getTotalItems}
      />

      <main className="flex-grow-1">
        {/* Breadcrumb */}
        <div className="bg-white border-bottom py-3">
          <div className="container-fluid px-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Products</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container py-4">
          <div className="row ">
            {/* Sidebar Filters */}
            <Sidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />

            {/* Products Section */}
            <div className="col">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                    <div className="mb-3 mb-md-0">
                      <h1 className="h3 mb-1">All Products</h1>
                      <p className="text-muted mb-0">
                        Showing {filteredProducts.length} of {products.length} products
                      </p>
                    </div>
                    
                    {/* View Toggle */}
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'} px-3`}
                        onClick={() => setViewMode('grid')}
                      >
                        <i className="bi bi-grid-3x3-gap me-2"></i> Grid
                      </button>
                      <button
                        type="button"
                        className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'} px-3`}
                        onClick={() => setViewMode('list')}
                      >
                        <i className="bi bi-list me-2"></i> List
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Display */}
              <div className="card shadow-sm">
                <div className="card-body">
                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-5">
                      <i className="bi bi-search display-1 text-muted"></i>
                      <h3 className="mt-3">No products found</h3>
                      <p className="text-muted">Try adjusting your search or filter criteria</p>
                      <button 
                        className="btn btn-primary mt-3"
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                          setPriceRange([0, 1000]);
                        }}
                      >
                        Reset Filters
                      </button>
                    </div>
                  ) : viewMode === 'grid' ? (
                    <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
                  ) : (
                    <ProductList products={filteredProducts} onAddToCart={addToCart} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      
    </div>
  );
};

export default Products;