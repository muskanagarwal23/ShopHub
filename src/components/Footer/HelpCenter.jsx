import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { FaSearch, FaHeadset, FaPhone, FaEnvelope } from 'react-icons/fa';
import { BsCheckCircleFill, BsArrowRight } from 'react-icons/bs';

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const helpCategories = [
    {
      title: "Orders & Shipping",
      icon: "bi bi-truck",
      topics: [
        "Track my order",
        "Shipping options",
        "Delivery times",
        "International shipping"
      ]
    },
    {
      title: "Returns & Refunds",
      icon: "bi bi-arrow-left-right",
      topics: [
        "Return an item",
        "Refund status",
        "Return shipping",
        "Damaged items"
      ]
    },
    {
      title: "Payments & Pricing",
      icon: "bi bi-credit-card",
      topics: [
        "Payment methods",
        "Promo codes",
        "Currency conversion",
        "Payment issues"
      ]
    }
  ];

  const faqs = [
    { 
      question: 'How do I track my order?', 
      answer: 'You can track your order by going to "My Orders" in your account dashboard.',
      category: 'orders'
    },
    // ... other FAQs
  ];

  const popularArticles = [
    {
      title: "How to create an account",
      category: "Account"
    },
    {
      title: "Changing your password",
      category: "Account"
    },
    {
      title: "Applying discount codes",
      category: "Payments"
    },
    {
      title: "Checking order status",
      category: "Orders"
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );


   return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <div className="bg-primary bg-opacity-10 py-5">
          <div className="container text-center">
            <h1 className="display-5 fw-bold text-dark mb-3">Help Center</h1>
            <p className="lead text-muted">
              Find answers to your questions or contact our support team
            </p>
          </div>
        </div>

        <div className="container py-5">
          {/* Search Section */}
          <div className="card shadow-sm mb-5">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <h2 className="h4 mb-3">How can we help you today?</h2>
                <div className="input-group mx-auto" style={{maxWidth: "600px"}}>
                  <span className="input-group-text bg-white">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="row g-4 mb-5">
            {helpCategories.map((category, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <i className={`${category.icon} fs-1 text-primary mb-3`}></i>
                    <h3 className="h5 mb-3">{category.title}</h3>
                    <ul className="list-unstyled">
                      {category.topics.map((topic, i) => (
                        <li key={i} className="mb-2">
                          <a href="#" className="text-decoration-none">
                            {topic} <BsArrowRight className="ms-1" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Articles */}
          <div className="card shadow-sm mb-5">
            <div className="card-body">
              <h2 className="h4 mb-4">Popular Articles</h2>
              <div className="row g-3">
                {popularArticles.map((article, index) => (
                  <div key={index} className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <span className="badge bg-light text-dark mb-2">
                          {article.category}
                        </span>
                        <h3 className="h6 mb-0">
                          <a href="#" className="text-decoration-none stretched-link">
                            {article.title}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="card shadow-sm mb-5">
            <div className="card-body">
              <h2 className="h4 mb-4">Frequently Asked Questions</h2>
              
              {filteredFAQs.length > 0 ? (
                <div className="accordion" id="faqAccordion">
                  {filteredFAQs.map((faq, index) => (
                    <div key={index} className="accordion-item mb-3 border">
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                          {faq.question}
                        </button>
                      </h3>
                      <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <div className="mb-3">
                    <FaSearch className="text-muted fs-1" />
                  </div>
                  <h3 className="h5">No results found for "{searchQuery}"</h3>
                  <p className="text-muted">
                    Try different keywords or browse our help categories
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Support */}
          <div className="card shadow-sm bg-primary bg-opacity-10 border-primary border-opacity-25">
            <div className="card-body p-5 text-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <BsCheckCircleFill className="text-primary fs-1 mb-3" />
                  <h2 className="h3 mb-3">Still need help?</h2>
                  <p className="lead mb-4">
                    Our customer support team is available 24/7 to assist you with any questions or issues.
                  </p>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <FaHeadset className="text-primary fs-3 mb-3" />
                          <h3 className="h5 mb-2">Live Chat</h3>
                          <p className="text-muted small mb-3">Instant help from our agents</p>
                          <a href="#" className="btn btn-sm btn-outline-primary">
                            Start Chat
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <FaPhone className="text-primary fs-3 mb-3" />
                          <h3 className="h5 mb-2">Call Us</h3>
                          <p className="text-muted small mb-3">1-800-SHOPCART</p>
                          <a href="#" className="btn btn-sm btn-outline-primary">
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <FaEnvelope className="text-primary fs-3 mb-3" />
                          <h3 className="h5 mb-2">Email Us</h3>
                          <p className="text-muted small mb-3">support@shopcart.com</p>
                          <a href="#" className="btn btn-sm btn-outline-primary">
                            Send Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;