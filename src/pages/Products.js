import { useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      image: "https://via.placeholder.com/300",
      category: "Electronics",
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: "Wireless Speaker",
      price: 89.99,
      image: "https://via.placeholder.com/300",
      category: "Electronics",
      rating: 4.3,
      reviews: 95
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 299.99,
      image: "https://via.placeholder.com/300",
      category: "Accessories",
      rating: 4.7,
      reviews: 156
    },
    // Add more products as needed...
  ];

  const categories = [
    "Electronics",
    "Accessories",
    "Clothing",
    "Home & Living",
    "Sports",
    "Books",
  ];

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4 md:mb-0">Our Products</h1>
        <div className="flex items-center space-x-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-border rounded focus:outline-none focus:border-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-2 border-accent">
            <h2 className="text-xl font-semibold text-secondary mb-4">Filters</h2>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:border-primary"
              >
                <option value="all">All Prices</option>
                <option value="0-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="200+">$200 & Above</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="mr-2"
                    />
                    <span className="text-text">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-border hover:border-accent">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-secondary">{product.category}</span>
                    <h3 className="text-lg font-semibold text-text mt-1">{product.name}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-accent font-bold">${product.price}</span>
                      <div className="ml-auto flex items-center">
                        <span className="text-secondary">★</span>
                        <span className="ml-1 text-sm text-text">{product.rating}</span>
                        <span className="ml-1 text-sm text-text">({product.reviews})</span>
                      </div>
                    </div>
                    <button className="w-full bg-primary text-white py-2 rounded mt-4 hover:bg-accent transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products; 