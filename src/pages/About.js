import { FaUsers, FaAward, FaHandshake, FaHeart } from 'react-icons/fa';

function About() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/200",
      bio: "20+ years of experience in retail and e-commerce"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      image: "https://via.placeholder.com/200",
      bio: "Former designer at major fashion brands"
    },
    {
      name: "Mike Chen",
      role: "Tech Lead",
      image: "https://via.placeholder.com/200",
      bio: "Expert in building scalable e-commerce platforms"
    },
    {
      name: "Emma Wilson",
      role: "Customer Success",
      image: "https://via.placeholder.com/200",
      bio: "Passionate about creating amazing customer experiences"
    }
  ];

  const companyValues = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Customer First",
      description: "We prioritize our customers' needs in everything we do"
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Quality",
      description: "We never compromise on the quality of our products"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Integrity",
      description: "We conduct business with honesty and transparency"
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Passion",
      description: "We're passionate about delivering the best experience"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-text max-w-2xl mx-auto">
          We're on a mission to revolutionize online shopping by providing high-quality products
          and exceptional customer service.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">Our Story</h2>
          <p className="text-text">
            Founded in 2020, we started with a simple idea: make online shopping better.
            We believed that customers deserved more than just products – they deserved
            an experience.
          </p>
          <p className="text-text">
            Today, we serve thousands of customers worldwide, offering a curated selection
            of premium products and a shopping experience that puts the customer first.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border-t-2 border-accent text-center"
            >
              <div className="text-secondary mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{value.title}</h3>
              <p className="text-text">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-text text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-secondary text-white rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">5K+</div>
            <div className="text-sm">Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sm">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 