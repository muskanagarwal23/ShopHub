import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  const { products, filteredProducts } = useProducts(
    searchQuery, 
    categoryId, 
    priceRange
  );

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="flex-grow-1">
        <div className="container py-4">
          <h1 className="mb-4 text-capitalize">{categoryId} Products</h1>
          <div className="row">
            <div className="col-12">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;