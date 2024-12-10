import { Link } from 'react-router-dom';
import paymentVisa from "../assets/payment-visa.svg";
import paymentMastercard from "../assets/payment-mastercard.svg";
import paymentPaypal from "../assets/payment-paypal.svg";
import { BASE_ROUTE } from '../lib/const';

function Footer() {
  return (
    <footer className="bg-primary mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">My Ecommerce</h3>
            <p className="text-white mb-4">
              Your one-stop shop for quality products and excellent service.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className="text-white hover:text-accent">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target='_blank' rel='noopener noreferrer' className="text-white hover:text-accent">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target='_blank' rel='noopener noreferrer' className="text-white hover:text-accent">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${BASE_ROUTE}/products`} className="text-white hover:text-accent">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={`/${BASE_ROUTE}/about`} className="text-white hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={`/${BASE_ROUTE}/contact`} className="text-white hover:text-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={`/${BASE_ROUTE}/faq`} className="text-white hover:text-accent">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${BASE_ROUTE}/shipping`} className="text-white hover:text-accent">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to={`/${BASE_ROUTE}/returns`} className="text-white hover:text-accent">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to={`/${BASE_ROUTE}/privacy`} className="text-white hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={`/${BASE_ROUTE}/terms`} className="text-white hover:text-accent">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Newsletter</h3>
            <p className="text-white mb-4">
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
                className="bg-accent text-white px-4 py-2 rounded hover:bg-accent transition duration-300 hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
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
                className="mt-1 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 