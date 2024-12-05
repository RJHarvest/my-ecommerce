import { Link } from 'react-router-dom';
import { BASE_ROUTE } from '../lib/const';

function ShippingPolicy() {
  const shippingMethods = [
    {
      name: "Standard Shipping",
      time: "3-5 business days",
      cost: "Free on orders over $50",
      details: "Available for all domestic orders within the United States"
    },
    {
      name: "Express Shipping",
      time: "2-3 business days",
      cost: "$12.99",
      details: "Available for all domestic orders within the United States"
    },
    {
      name: "Next Day Delivery",
      time: "1 business day",
      cost: "$24.99",
      details: "Order must be placed before 2 PM EST (excluding weekends and holidays)"
    },
    {
      name: "International Shipping",
      time: "7-14 business days",
      cost: "Calculated at checkout",
      details: "Available for most countries worldwide"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-secondary mb-6">Shipping Policy</h1>
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="text-text mb-4">
            At My Ecommerce, we strive to provide you with the best possible shipping experience. 
            We offer various shipping methods to meet your needs and ensure your items arrive safely 
            and on time.
          </p>
          <p className="text-text">
            Please review our shipping policies below. If you have any questions, don't hesitate to{' '}
            <Link to={`/${BASE_ROUTE}/contact`} className="text-accent hover:underline">
              contact our support team
            </Link>.
          </p>
        </div>

        {/* Shipping Methods */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Shipping Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shippingMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
                <h3 className="text-lg font-semibold text-primary mb-2">{method.name}</h3>
                <div className="space-y-2">
                  <p className="text-text">
                    <span className="font-medium">Delivery Time:</span> {method.time}
                  </p>
                  <p className="text-text">
                    <span className="font-medium">Cost:</span> {method.cost}
                  </p>
                  <p className="text-muted text-sm">{method.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Processing */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Order Processing</h2>
          <div className="space-y-4">
            <p className="text-text">
              Orders are processed within 1-2 business days after payment confirmation. 
              During peak seasons or promotional periods, processing times may be slightly longer.
            </p>
            <p className="text-text">
              Once your order has been processed and shipped, you will receive a confirmation 
              email with tracking information.
            </p>
          </div>
        </div>

        {/* Shipping Restrictions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Shipping Restrictions</h2>
          <ul className="list-disc list-inside space-y-2 text-text">
            <li>We cannot ship to P.O. boxes for express or next-day deliveries</li>
            <li>Some items may not be eligible for international shipping</li>
            <li>Certain countries may have import restrictions or additional duties</li>
            <li>Hazardous materials are subject to shipping restrictions</li>
          </ul>
        </div>

        {/* International Shipping */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">International Shipping</h2>
          <div className="space-y-4">
            <p className="text-text">
              International customers are responsible for all duties, import taxes, and customs 
              fees. These charges are not included in the shipping cost and will be collected 
              by the delivery carrier.
            </p>
            <p className="text-text">
              Please note that international delivery times may vary depending on customs 
              processing in your country.
            </p>
          </div>
        </div>

        {/* Tracking Orders */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Tracking Your Order</h2>
          <div className="space-y-4">
            <p className="text-text">
              Once your order ships, you'll receive a tracking number via email. You can also 
              track your order by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text">
              <li>Logging into your account and viewing your order history</li>
              <li>Using our order tracking page with your order number</li>
              <li>Contacting our customer support team</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-secondary/5 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-primary mb-4">Need Help?</h2>
          <p className="text-text mb-6">
            If you have any questions about our shipping policy or need assistance with your order, 
            our customer support team is here to help.
          </p>
          <Link 
            to={`/${BASE_ROUTE}/contact`}
            className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShippingPolicy; 