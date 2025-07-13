import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaHeadset } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const contactMethods = [
    {
      icon: <FaEnvelope className="text-primary fs-3" />,
      title: "Email Us",
      details: ["support@shopcart.com", "info@shopcart.com"],
      action: "Average response time: 2 hours"
    },
    {
      icon: <FaPhone className="text-primary fs-3" />,
      title: "Call Us",
      details: ["+1 (800) 123-4567", "Mon-Fri: 8am - 8pm EST"],
      action: "Call now"
    },
    {
      icon: <FaHeadset className="text-primary fs-3" />,
      title: "Live Chat",
      details: ["Available 24/7", "Click to start chat"],
      action: "Chat now"
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <div className="bg-primary bg-opacity-10 py-5">
          <div className="container text-center">
            <h1 className="display-5 fw-bold text-dark mb-3">Contact Us</h1>
            <p className="lead text-muted">
              We're here to help and answer any questions you might have
            </p>
          </div>
        </div>

        <div className="container py-5">
          <div className="row g-4">
            {/* Contact Methods */}
            <div className="col-lg-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 mb-4">Contact Information</h2>
                  
                  {contactMethods.map((method, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex align-items-start mb-2">
                        <div className="me-3">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="h5 mb-1">{method.title}</h3>
                          {method.details.map((detail, i) => (
                            <p key={i} className="text-muted mb-1">{detail}</p>
                          ))}
                          <a href="#" className="btn btn-sm btn-outline-primary mt-2">
                            {method.action}
                          </a>
                        </div>
                      </div>
                      {index < contactMethods.length - 1 && <hr className="my-3" />}
                    </div>
                  ))}

                  <div className="mt-4">
                    <h3 className="h5 mb-2">
                      <FaMapMarkerAlt className="text-primary me-2" />
                      Our Location
                    </h3>
                    <p className="text-muted mb-2">
                      123 Commerce Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                    <a 
                      href="#" 
                      className="btn btn-sm btn-outline-primary"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h3 className="h5 mb-3">
                    <FaClock className="text-primary me-2" />
                    Business Hours
                  </h3>
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between py-2 border-bottom">
                      <span>Monday - Friday</span>
                      <span className="text-muted">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="d-flex justify-content-between py-2 border-bottom">
                      <span>Saturday</span>
                      <span className="text-muted">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="d-flex justify-content-between py-2">
                      <span>Sunday</span>
                      <span className="text-muted">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="h4 mb-4">Send Us a Message</h2>
                  
                  {formStatus === 'success' ? (
                    <div className="alert alert-success d-flex align-items-center">
                      <BsCheckCircleFill className="flex-shrink-0 me-2" />
                      <div>
                        <h4 className="alert-heading">Message Sent!</h4>
                        <p className="mb-0">
                          Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <label className="form-label">Your Name</label>
                          <input 
                            type="text" 
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email Address</label>
                          <input 
                            type="email" 
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <select 
                          className="form-select"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a topic</option>
                          <option value="order">Order Inquiry</option>
                          <option value="product">Product Information</option>
                          <option value="return">Returns & Refunds</option>
                          <option value="wholesale">Wholesale Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Your Message</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary px-4">
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="card shadow-sm mt-4">
                <div className="card-body">
                  <h2 className="h4 mb-4">Common Questions</h2>
                  <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                      <h3 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                          How can I track my order?
                        </button>
                      </h3>
                      <div id="faqOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                          You can track your order by logging into your account and visiting the "My Orders" section. 
                          Tracking information is updated within 24 hours of shipment.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h3 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                          What is your return policy?
                        </button>
                      </h3>
                      <div id="faqTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                          We accept returns within 30 days of purchase. Items must be unused and in original packaging. 
                          Please visit our Returns Center for more details.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <a href="/help" className="btn btn-outline-primary">
                      Visit Help Center for More FAQs
                    </a>
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

export default Contact;