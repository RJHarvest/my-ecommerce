import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-background shadow-md sticky top-0 z-50 border-b-2 border-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              Your Logo
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-text hover:text-accent transition-colors duration-300">
              Home
            </Link>
            <Link to="/products" className="text-text hover:text-accent transition-colors duration-300">
              Products
            </Link>
            <Link to="/about" className="text-text hover:text-accent transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-text hover:text-accent transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 