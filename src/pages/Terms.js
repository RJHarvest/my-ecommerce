import { Link } from 'react-router-dom';
import { BASE_ROUTE } from '../lib/const';

function Terms() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: [
        "By accessing our website, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.",
        "If you do not agree with any of these terms, you are prohibited from using or accessing this site."
      ]
    },
    {
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials (information or software) on My Ecommerce's website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        [
          "modify or copy the materials", 
          "use the materials for any commercial purpose",
          "attempt to decompile or reverse engineer any software",
          "remove any copyright or other proprietary notations",
          "transfer the materials to another person"
        ]
      ]
    },
    {
      title: "Account Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account and password.",
        "You agree to accept responsibility for all activities that occur under your account.",
        "You must notify us immediately of any unauthorized use of your account or any other security breach."
      ]
    },
    {
      title: "Product Information",
      content: [
        "We strive to provide accurate product descriptions and pricing information.",
        "We reserve the right to modify, update, or discontinue any product without notice.",
        "Colors and appearances may vary slightly from images shown on the website due to monitor settings and manufacturing variations."
      ]
    },
    {
      title: "Pricing and Payment",
      content: [
        "All prices are subject to change without notice.",
        "We reserve the right to refuse or cancel any order for any reason.",
        "Payments are processed securely through our authorized payment processors.",
        "By making a purchase, you warrant that you have legal right to use the payment method provided."
      ]
    }
  ];

  const disclaimers = [
    "The materials on My Ecommerce's website are provided on an 'as is' basis.",
    "My Ecommerce makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    "My Ecommerce does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-primary mb-6">Terms & Conditions</h1>
        
        {/* Last Updated */}
        <div className="bg-secondary/5 rounded-lg p-4 mb-8">
          <p className="text-muted text-sm">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="text-text">
            Please read these Terms and Conditions carefully before using our website. 
            Your access to and use of the service is conditioned on your acceptance of and 
            compliance with these terms.
          </p>
        </div>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold text-secondary mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.content.map((item, itemIndex) => (
                Array.isArray(item) ? (
                  <ul key={itemIndex} className="list-disc list-inside space-y-2 text-text ml-4">
                    {item.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={itemIndex} className="text-text">{item}</p>
                )
              ))}
            </div>
          </div>
        ))}

        {/* Disclaimers */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Disclaimers</h2>
          <div className="space-y-4">
            {disclaimers.map((disclaimer, index) => (
              <p key={index} className="text-text">
                {disclaimer}
              </p>
            ))}
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Governing Law</h2>
          <p className="text-text">
            These terms and conditions are governed by and construed in accordance with the 
            laws of [Your Country/State] and you irrevocably submit to the exclusive 
            jurisdiction of the courts in that location.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Changes to Terms</h2>
          <p className="text-text mb-4">
            We reserve the right to modify or replace these terms at any time. We will provide 
            notice of any changes by posting the new terms on this page.
          </p>
          <p className="text-text">
            Your continued use of the website after any changes constitutes acceptance of the new terms.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-secondary/5 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-primary mb-4">Questions About Our Terms?</h2>
          <p className="text-text mb-6">
            If you have any questions about these Terms & Conditions, please contact our legal team.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to={`/${BASE_ROUTE}/contact`}
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to={`/${BASE_ROUTE}/privacy`}
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms; 