import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { BASE_ROUTE } from '../lib/const';

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 199.99,
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400"
    ],
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    description: "Experience premium sound quality with our wireless headphones. Featuring advanced noise cancellation, comfortable ear cups, and long battery life.",
    features: [
      "Active Noise Cancellation",
      "40-hour Battery Life",
      "Bluetooth 5.0",
      "Built-in Microphone",
      "Quick Charge Technology"
    ],
    specifications: {
      "Brand": "TechBrand",
      "Model": "PH-2000",
      "Color": "Matte Black",
      "Connectivity": "Wireless",
      "Weight": "250g"
    },
    stock: 15
  },
  {
    id: 2,
    name: "Wireless Speaker",
    price: 89.99,
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400"
    ],
    category: "Electronics",
    rating: 4.3,
    reviews: 95,
    description: "Dominate your games with this high-precision wireless gaming mouse. Features adjustable DPI, programmable buttons, and RGB lighting.",
    features: [
      "16000 DPI Sensor",
      "8 Programmable Buttons",
      "RGB Lighting",
      "Ergonomic Design",
      "50-hour Battery Life"
    ],
    specifications: {
      "Brand": "TechBrand",
      "Model": "GM-100",
      "Color": "Black/RGB",
      "Connectivity": "2.4GHz Wireless",
      "Weight": "95g"
    },
    stock: 30
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 299.99,
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400"
    ],
    category: "Accessories",
    rating: 4.7,
    reviews: 156,
    description: "Stay connected and track your fitness with our advanced smartwatch. Features include heart rate monitoring, GPS tracking, and a vibrant OLED display.",
    features: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "5 ATM Water Resistance",
      "Sleep Tracking",
      "7-day Battery Life"
    ],
    specifications: {
      "Brand": "TechBrand",
      "Model": "SW-500",
      "Color": "Silver",
      "Display": "1.4\" OLED",
      "Weight": "45g"
    },
    stock: 20
  },
];

function ProductLanding() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sample product data - in a real app, you'd fetch this based on the ID
  const product = products.find(product => product.id === parseInt(id));

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex text-sm">
          <Link to={`/${BASE_ROUTE}`} className="text-muted hover:text-accent">Home</Link>
          <span className="mx-2 text-muted">/</span>
          <Link to={`/${BASE_ROUTE}/products`} className="text-muted hover:text-accent">Products</Link>
          <span className="mx-2 text-muted">/</span>
          <span className="text-accent">{product.name}</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-4 aspect-h-3 bg-white rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-secondary' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-text mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-sm text-text">{product.rating}</span>
                <span className="ml-1 text-sm text-muted">({product.reviews} reviews)</span>
              </div>
              <span className="text-sm text-secondary">{product.category}</span>
            </div>
          </div>

          <div className="text-2xl font-bold text-accent">
            ${product.price}
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-text">{product.description}</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-text">Quantity:</span>
            <div className="flex items-center border border-border rounded">
              <button
                onClick={decrementQuantity}
                className="px-3 py-1 text-text hover:bg-background"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center border-x border-border outline-secondary py-1"
              />
              <button
                onClick={incrementQuantity}
                className="px-3 py-1 text-text hover:bg-background"
              >
                +
              </button>
            </div>
            <span className="text-sm text-muted">
              {product.stock} items available
            </span>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-accent text-white py-3 rounded-lg hover:opacity-90 transition-opacity duration-300">
            Add to Cart
          </button>

          {/* Features */}
          <div className="border-t border-border pt-6">
            <h2 className="text-lg font-semibold text-text mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-text">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="border-t border-border pt-6">
            <h2 className="text-lg font-semibold text-text mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <span className="text-muted">{key}:</span>
                  <span className="ml-2 text-text">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLanding; 