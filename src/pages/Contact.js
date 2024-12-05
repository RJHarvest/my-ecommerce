import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Form submitted successfully');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:border-primary"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:border-primary"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:border-primary"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-border rounded focus:outline-none focus:border-primary"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded hover:bg-opacity-90 transition-opacity duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Map Placeholder */}
          <div className="bg-gray-200 h-64 rounded-lg overflow-hidden border border-accent/20">
            {/* Replace with actual map component */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Map placeholder
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>
              <p className="text-text">
                123 Store Street<br />
                City, State 12345<br />
                United States
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Contact Info</h3>
              <div className="space-y-2">
                <p className="text-text">
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:contact@example.com" className="text-accent hover:opacity-85">
                    contact@example.com
                  </a>
                </p>
                <p className="text-text">
                  <span className="font-medium">Phone:</span>{' '}
                  <a href="tel:+1234567890" className="text-accent hover:opacity-85">
                    (852) 9123 4567
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Business Hours</h3>
              <div className="space-y-1">
                <p className="text-text">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-text">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-text">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;