import { Link } from 'react-router-dom';
import paymentVisa from "../assets/payment-visa.svg";
import paymentMastercard from "../assets/payment-mastercard.svg";
import paymentPaypal from "../assets/payment-paypal.svg";

function Footer() {
  return (
    <footer className="bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Your Store</h3>
            <p className="text-text mb-4">
              Your one-stop shop for quality products and excellent service.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className="text-primary hover:text-accent">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target='_blank' rel='noopener noreferrer' className="text-primary hover:text-accent">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target='_blank' rel='noopener noreferrer' className="text-primary hover:text-accent">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-text hover:text-primary">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-text hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-text hover:text-primary">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-text hover:text-primary">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-text hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-text hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Newsletter</h3>
            <p className="text-text mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-border rounded focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text text-sm">
              © {new Date().getFullYear()} My Ecommerce Store. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <img
                src={paymentVisa}
                alt="Visa"
                className="h-8"
              />
              <img
                src={paymentMastercard}
                alt="Mastercard"
                className="h-8"
              />
              <img
                src={paymentPaypal}
                alt="PayPal"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 