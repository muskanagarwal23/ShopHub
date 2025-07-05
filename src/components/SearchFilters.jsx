import React, { useState } from 'react';

const SearchFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  onQuickFilterChange, // New prop for quick filters
}) => {
  const [activeQuickFilters, setActiveQuickFilters] = useState({
    onSale: false,
    freeShipping: false,
    highRated: false,
    inStock: false,
  });

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    onPriceRangeChange(newRange);
  };

  const toggleQuickFilter = (filterName) => {
    const updatedFilters = {
      ...activeQuickFilters,
      [filterName]: !activeQuickFilters[filterName]
    };
    setActiveQuickFilters(updatedFilters);
    onQuickFilterChange(updatedFilters);
  };

  const clearAllFilters = () => {
    onCategoryChange('all');
    onPriceRangeChange([0, 1000]);
    setActiveQuickFilters({
      onSale: false,
      freeShipping: false,
      highRated: false,
      inStock: false,
    });
    onQuickFilterChange({
      onSale: false,
      freeShipping: false,
      highRated: false,
      inStock: false,
    });
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title mb-4 fw-bold">Filters</h5>
        
        {/* Categories */}
        <div className="mb-4">
          <h6 className="mb-3 fw-semibold">Categories</h6>
          <div className="d-grid gap-2">
            <button
              className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'} text-start rounded-pill`}
              onClick={() => onCategoryChange('all')}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} text-start text-capitalize rounded-pill`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <h6 className="mb-3 fw-semibold">Price Range</h6>
          <div className="d-flex justify-content-between mb-2">
            <span className="small">Min: ${priceRange[0]}</span>
            <span className="small">Max: ${priceRange[1]}</span>
          </div>
          <div className="row g-2 mb-2">
            <div className="col">
              <input
                type="range"
                className="form-range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, e.target.value)}
              />
            </div>
          </div>
          <div className="row g-2 mb-3">
            <div className="col">
              <input
                type="range"
                className="form-range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(1, e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="mb-4">
          <h6 className="mb-3 fw-semibold">Quick Filters</h6>
          <div className="d-flex flex-wrap gap-2">
            <button
              className={`btn btn-sm ${activeQuickFilters.onSale ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
              onClick={() => toggleQuickFilter('onSale')}
            >
              On Sale
            </button>
            <button
              className={`btn btn-sm ${activeQuickFilters.freeShipping ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
              onClick={() => toggleQuickFilter('freeShipping')}
            >
              Free Shipping
            </button>
            <button
              className={`btn btn-sm ${activeQuickFilters.highRated ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
              onClick={() => toggleQuickFilter('highRated')}
            >
              High Rated
            </button>
            <button
              className={`btn btn-sm ${activeQuickFilters.inStock ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
              onClick={() => toggleQuickFilter('inStock')}
            >
              In Stock
            </button>
          </div>
        </div>

        {/* Clear Filters */}
        <button
          className="btn btn-outline-secondary w-100 rounded-pill"
          onClick={clearAllFilters}
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;