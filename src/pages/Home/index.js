import { Link } from 'react-router-dom';
import "./index.css";

function Home() {
  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      image: "https://via.placeholder.com/300",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Wireless Speaker",
      price: 89.99,
      image: "https://via.placeholder.com/300",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 299.99,
      image: "https://via.placeholder.com/300",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Laptop Bag",
      price: 49.99,
      image: "https://via.placeholder.com/300",
      category: "Accessories"
    }
  ];

  // Sample categories
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "https://via.placeholder.com/400",
      itemCount: 150
    },
    {
      id: 2,
      name: "Clothing",
      image: "https://via.placeholder.com/400",
      itemCount: 300
    },
    {
      id: 3,
      name: "Accessories",
      image: "https://via.placeholder.com/400",
      itemCount: 200
    },
    {
      id: 4,
      name: "Home & Living",
      image: "https://via.placeholder.com/400",
      itemCount: 180
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>New Season Arrivals</h1>
            <p>Check out all the new trends and styles for 2024</p>
            <Link to="/products" className="hero-button">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="section-container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                  <button className="add-to-cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.name.toLowerCase()}`}
                className="category-card"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay">
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-count">{category.itemCount} Products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-section">
        <div className="section-container">
          <div className="promo-content">
            <div className="promo-text">
              <h2>Special Offer</h2>
              <p>Get 20% off on your first purchase</p>
              <Link to="/products" className="promo-button">
                Shop Now
              </Link>
            </div>
            <div className="promo-image-container">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Special Offer"
                className="promo-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="section-container">
          <h2 className="section-title">Stay Updated</h2>
          <p className="newsletter-text">
            Subscribe to our newsletter and get exclusive offers, new product alerts, and insider-only discounts.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button
              type="submit"
              className="newsletter-button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home; 