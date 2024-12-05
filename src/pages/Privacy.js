import { Link } from 'react-router-dom';
import { BASE_ROUTE } from '../lib/const';

function Privacy() {
  const dataCollected = [
    {
      title: "Personal Information",
      items: [
        "Name and contact details",
        "Shipping and billing addresses",
        "Email address",
        "Phone number",
        "Date of birth"
      ]
    },
    {
      title: "Technical Information",
      items: [
        "IP address",
        "Browser type and version",
        "Device information",
        "Operating system",
        "Cookies and usage data"
      ]
    },
    {
      title: "Shopping Information",
      items: [
        "Order history",
        "Product preferences",
        "Shopping cart contents",
        "Wishlist items",
        "Product reviews"
      ]
    }
  ];

  const dataUsage = [
    {
      purpose: "Order Processing",
      description: "To process and fulfill your orders, including shipping and payment handling"
    },
    {
      purpose: "Customer Service",
      description: "To provide support and respond to your inquiries"
    },
    {
      purpose: "Personalization",
      description: "To customize your shopping experience and provide personalized recommendations"
    },
    {
      purpose: "Marketing",
      description: "To send promotional materials and updates about our products (with your consent)"
    },
    {
      purpose: "Analytics",
      description: "To improve our website, products, and services"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-primary mb-6">Privacy Policy</h1>
        
        {/* Last Updated */}
        <div className="bg-secondary/5 rounded-lg p-4 mb-8">
          <p className="text-muted text-sm">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="text-text mb-4">
            At My Ecommerce, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or make a purchase.
          </p>
          <p className="text-text">
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
            policy, please do not access the site.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Information We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataCollected.map((category, index) => (
              <div key={index} className="bg-background/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-primary mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-text flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">How We Use Your Information</h2>
          <div className="space-y-4">
            {dataUsage.map((item, index) => (
              <div key={index} className="border-l-4 border-accent pl-4">
                <h3 className="text-lg font-semibold text-primary mb-2">{item.purpose}</h3>
                <p className="text-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Data Security</h2>
          <p className="text-text mb-4">
            We implement appropriate technical and organizational security measures to protect 
            your personal information from unauthorized access, disclosure, alteration, or destruction.
          </p>
          <div className="bg-secondary/5 p-4 rounded-lg">
            <h3 className="font-semibold text-primary mb-2">Security Measures Include:</h3>
            <ul className="list-disc list-inside space-y-2 text-text">
              <li>SSL encryption for all data transmission</li>
              <li>Secure password hashing</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Employee confidentiality agreements</li>
            </ul>
          </div>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Cookies and Tracking</h2>
          <p className="text-text mb-4">
            We use cookies and similar tracking technologies to track activity on our website 
            and hold certain information to improve and analyze our service.
          </p>
          <p className="text-text">
            You can instruct your browser to refuse all cookies or to indicate when a cookie 
            is being sent. However, if you do not accept cookies, you may not be able to use 
            some portions of our service.
          </p>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Your Rights</h2>
          <div className="space-y-3">
            <p className="text-text">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-text">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-secondary/5 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-primary mb-4">Questions About Our Privacy Policy?</h2>
          <p className="text-text mb-6">
            If you have any questions about this Privacy Policy or our data practices, 
            please contact our privacy team.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to={`/${BASE_ROUTE}/contact`}
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Contact Privacy Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy; 