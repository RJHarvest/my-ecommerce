import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BASE_ROUTE } from '../lib/const';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping typically takes 3-5 business days within the US. International shipping can take 7-14 business days depending on the destination."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a tracking number via email that you can use to monitor your delivery status."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging."
        },
        {
          question: "How do I initiate a return?",
          answer: "Log into your account, go to your orders, and select 'Return Item'. Follow the instructions to print your return label."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 5-7 business days after we receive your return. The funds may take an additional 3-5 days to appear in your account."
        }
      ]
    },
    {
      category: "Payment & Security",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details."
        }
      ]
    },
    {
      category: "Account & Orders",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click the 'Sign Up' button in the top right corner and fill out the registration form with your details."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "Orders can be modified or cancelled within 1 hour of placement. Contact customer service for assistance."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const newIndex = openIndex === `${categoryIndex}-${questionIndex}` ? null : `${categoryIndex}-${questionIndex}`;
    setOpenIndex(newIndex);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions</h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <h2 className="bg-secondary/5 text-secondary text-xl font-semibold p-4 border-b border-border">
              {category.category}
            </h2>
            
            <div className="divide-y divide-border">
              {category.questions.map((item, questionIndex) => (
                <div key={questionIndex} className="border-border">
                  <button
                    className="w-full flex justify-between items-center p-4 hover:bg-background/50 transition-colors duration-200"
                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                  >
                    <span className="text-left font-medium text-text">
                      {item.question}
                    </span>
                    <span className="text-accent ml-4">
                      {openIndex === `${categoryIndex}-${questionIndex}` ? (
                        <FiMinus className="w-5 h-5" />
                      ) : (
                        <FiPlus className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  
                  {openIndex === `${categoryIndex}-${questionIndex}` && (
                    <div className="p-4 pt-0 text-text/80 bg-background/5">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto my-12 text-center">
        <h2 className="text-xl font-semibold text-primary mb-4">
          Still have questions?
        </h2>
        <p className="text-text mb-6">
          Can't find the answer you're looking for? Please contact our customer support team.
        </p>
        <Link to={`/${BASE_ROUTE}/contact`}>
          <button
            className="bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            Contact Support
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FAQ; 