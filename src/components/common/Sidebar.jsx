import React from "react";
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
      <SearchFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        priceRange={priceRange}
        onPriceRangeChange={onPriceRangeChange}
        onQuickFilterChange={onQuickFilterChange}
      />
    </aside>
  );
};

export default Sidebar;