import { Link } from 'react-router-dom';
import { BASE_ROUTE } from '../lib/const';

function Returns() {
  const returnSteps = [
    {
      title: "Initiate Return",
      description: "Log into your account and select the item(s) you wish to return. Fill out our return form with the reason for your return."
    },
    {
      title: "Get Return Label",
      description: "Once your return is approved, we'll email you a prepaid return shipping label (for eligible returns)."
    },
    {
      title: "Pack Items",
      description: "Pack the item(s) securely in their original packaging with all tags and accessories included."
    },
    {
      title: "Ship Return",
      description: "Drop off your package at any authorized shipping location using our prepaid label."
    }
  ];

  const eligibilityItems = [
    "Items must be returned within 30 days of delivery",
    "Products must be unused and in original condition",
    "Original tags and packaging must be intact",
    "Items must be free from wear, damage, or alterations",
    "All accessories and free gifts must be included"
  ];

  const nonReturnableItems = [
    "Intimate apparel and swimwear",
    "Personalized or custom-made items",
    "Digital products and downloaded software",
    "Gift cards and store credits",
    "Clearance items marked as final sale"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-primary mb-6">Returns & Exchanges</h1>
        
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="text-text mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with your order, 
            we offer a simple and hassle-free return process within 30 days of delivery.
          </p>
          <div className="bg-secondary/5 p-4 rounded-lg">
            <p className="text-text font-medium">
              Note: Different return policies may apply during holiday seasons or promotional periods. 
              Please check for any special notices during checkout.
            </p>
          </div>
        </div>

        {/* Return Process Steps */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Return Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {returnSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-bold mr-3">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Return Eligibility */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Return Eligibility</h2>
          <ul className="space-y-3">
            {eligibilityItems.map((item, index) => (
              <li key={index} className="flex items-center text-text">
                <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Non-Returnable Items */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Non-Returnable Items</h2>
          <ul className="space-y-3">
            {nonReturnableItems.map((item, index) => (
              <li key={index} className="flex items-center text-text">
                <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Refund Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Refund Information</h2>
          <div className="space-y-4">
            <p className="text-text">
              Once we receive your return, we'll inspect the item(s) and process your refund within 
              3-5 business days. The refund will be issued to your original payment method.
            </p>
            <div className="bg-secondary/5 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Refund Timeline:</h3>
              <ul className="list-disc list-inside space-y-1 text-text">
                <li>Credit Card: 5-7 business days</li>
                <li>Debit Card: 3-5 business days</li>
                <li>Store Credit: Immediate</li>
                <li>PayPal: 2-3 business days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exchanges */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Exchanges</h2>
          <p className="text-text mb-4">
            For exchanges, we recommend returning the item for a refund and placing a new order. 
            This ensures you get the exact item you want and helps us process your request faster.
          </p>
          <p className="text-text">
            If you need a different size or color, you can initiate an exchange through your 
            account dashboard or contact our customer service team for assistance.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-secondary/5 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-primary mb-4">Need Assistance?</h2>
          <p className="text-text mb-6">
            If you have any questions about our return policy or need help with a return, 
            our customer service team is here to assist you.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to={`/${BASE_ROUTE}/contact`}
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Contact Support
            </Link>
            <Link 
              to={`/${BASE_ROUTE}/faq`}
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Returns; 