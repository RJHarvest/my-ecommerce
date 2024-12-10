import { Link, useLocation } from 'react-router-dom';
import { BASE_ROUTE } from '../lib/const';

function Navbar() {
  const location = useLocation();
  
  const menuItems = [
    { label: 'Home', path: `/${BASE_ROUTE}` },
    { label: 'Products', path: `/${BASE_ROUTE}/products` },
    { label: 'About', path: `/${BASE_ROUTE}/about` },
    { label: 'Contact', path: `/${BASE_ROUTE}/contact` },
  ];

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50 border-b-2 border-secondary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={`/${BASE_ROUTE}`} className="text-xl font-bold text-secondary">
              Your Logo
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-accent font-medium' : 'text-text hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;