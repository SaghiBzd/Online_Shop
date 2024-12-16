import React from 'react';
import { SearchAndFilterProps } from '../Types/Type';

const SearchAndFilter: React.FC<SearchAndFilterProps> = React.memo(({
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
}) => {
  const sStyle = "hover:border rounded-md p-2 w-full md:w-2/5 max-w-lg";

  return (
    <div className="mb-6 flex flex-col md:flex-row items-center gap-4 justify-center">
    <input
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={(change) => setSearchQuery(change.target.value)}
      className={sStyle}/>
    <select
      value={categoryFilter}
      onChange={(change) => setCategoryFilter(change.target.value)}
      className={sStyle}>
      <option value="">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelry</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>
  </div>
  );
});

export default SearchAndFilter;
