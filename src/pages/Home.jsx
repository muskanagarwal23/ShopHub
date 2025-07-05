import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Sidebar from "../components/common/Sidebar";
import HeroCarousel from "../components/Home/HeroCarousel";
import FeaturedCategories from "../components/Home/FeaturedCategories";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import ProductGrid from "../components/ProductGrid";
import ProductList from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { toast } from "react-toastify";
import { useCartContext } from "../context/CartProvider";

const Home = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const navigate = useNavigate();

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCartContext(); 

  
  
  const { products, filteredProducts, categories } = useProducts(
    searchQuery,
    selectedCategory,
    priceRange
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFeaturedCategoryClick = (categoryId) => {
    navigate(`/products?category=${categoryId}`);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange([0, 1000]);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  // Get first 6 products for home page display
  const displayedProducts = filteredProducts.slice(0, 6);

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        getTotalItems={getTotalItems}
      />

      <HeroCarousel 
        className="w-100" 
        onShopNowClick={() => navigate('/products')}
      />
      
      <FeaturedCategories 
        categories={categories} 
        onCategoryClick={(categoryId) => {
          setSelectedCategory(categoryId);
          document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <FeaturedProducts 
        products={products.slice(0, 4)} 
        onAddToCart={handleAddToCart}
        onViewAll={() => navigate('/products')}
      />

      <main className="container py-4 flex-grow-1" id="products-section">
        <section>
          <div className="row">
            <Sidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategorySelect}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              onResetFilters={resetFilters}
            />

            <div className="col-lg-9">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                    <div>
                      <h2 className="h3 mb-1">All Products</h2>
                      <p className="text-muted mb-0">
                        Showing {displayedProducts.length} of {filteredProducts.length} products
                        {filteredProducts.length > 6 && (
                          <button 
                            className="btn btn-link btn-sm ms-2"
                            onClick={() => navigate('/products')}
                          >
                            (View All)
                          </button>
                        )}
                      </p>
                    </div>

                    <div className="btn-group mt-3 mt-md-0" role="group">
                      <button
                        type="button"
                        className={`btn ${
                          viewMode === "grid" ? "btn-primary" : "btn-outline-primary"
                        }`}
                        onClick={() => setViewMode("grid")}
                      >
                        <i className="bi bi-grid-3x3-gap me-2"></i> Grid
                      </button>
                      <button
                        type="button"
                        className={`btn ${
                          viewMode === "list" ? "btn-primary" : "btn-outline-primary"
                        }`}
                        onClick={() => setViewMode("list")}
                      >
                        <i className="bi bi-list me-2"></i> List
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="card shadow-sm">
                  <div className="card-body text-center py-5">
                    <i className="bi bi-search display-1 text-muted"></i>
                    <h3 className="mt-3">No products found</h3>
                    <p className="text-muted">
                      Try adjusting your search or filter criteria
                    </p>
                    <button 
                      className="btn btn-primary mt-3"
                      onClick={resetFilters}
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              ) : viewMode === "grid" ? (
                <>
                  <ProductGrid
                    products={displayedProducts}
                    onAddToCart={handleAddToCart}
                  />
                  {filteredProducts.length > 6 && (
                    <div className="text-center mt-4">
                      <button 
                        className="btn btn-outline-primary"
                        onClick={() => navigate('/products')}
                      >
                        View All Products ({filteredProducts.length})
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <ProductList
                    products={displayedProducts}
                    onAddToCart={handleAddToCart}
                  />
                  {filteredProducts.length > 6 && (
                    <div className="text-center mt-4">
                      <button 
                        className="btn btn-outline-primary"
                        onClick={() => navigate('/products')}
                      >
                        View All Products ({filteredProducts.length})
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;