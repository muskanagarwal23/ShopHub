// Sidebar.jsx
import {Link} from "react-router-dom";
import SearchFilters from "../../components/SearchFilters";

const Sidebar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  onQuickFilterChange,
}) => {
  return (
    <aside className="col-lg-3 mb-4">
      <div className="card shadow-sm border-0 rounded-lg overflow-hidden">
        <div className="card-header bg-white py-3 border-bottom">
          <h5 className="mb-0 fw-semibold text-gray-800">
            <i className="bi bi-funnel me-2 text-primary"></i>
            Filters
          </h5>
        </div>
        <div className="card-body p-0">
          <SearchFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            priceRange={priceRange}
            onPriceRangeChange={onPriceRangeChange}
            onQuickFilterChange={onQuickFilterChange}
          />
        </div>
        <div className="card-footer bg-white py-3 border-top">
          <button 
            className="btn btn-outline-primary w-100"
            onClick={() => {
              onCategoryChange('all');
              onPriceRangeChange([0, 1000]);
              if (onQuickFilterChange) onQuickFilterChange('all');
            }}
          >
            <i className="bi bi-arrow-counterclockwise me-2"></i>
            Reset Filters
          </button>
        </div>
      </div>
      
      {/* Promo Banner */}
      <div className="card mt-4 border-0 shadow-sm overflow-hidden">
        <div className="card-body p-0">
          <div className="bg-primary text-white p-4 text-center">
            <h6 className="fw-bold mb-2">Summer Sale</h6>
            <p className="small mb-3">Up to 30% off on selected items</p>
            <Link 
              to="/products?discount=true" 
              className="btn btn-sm btn-light rounded-pill px-3"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;