import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Cart from '../pages/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useCartContext } from '../context/CartProvider';

const About = () => {
  
  const { getTotalItems } = useCartContext();
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      bio: 'Visionary leader with 15+ years in e-commerce'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      bio: 'Tech enthusiast building scalable solutions'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Creative mind behind our brand identity'
    },
    {
      name: 'David Wilson',
      role: 'Customer Support Lead',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Ensuring our customers are always happy'
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar  getTotalItems={getTotalItems} />

      <main className="flex-grow-1">
        {/* Breadcrumb */}
        <div className="bg-white border-bottom py-3">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/" className="text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container py-5">
          {/* Hero Section */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-1 order-2">
              <h1 className="display-4 fw-bold mb-4">Our Story</h1>
              <p className="lead mb-4">
                ShopHub was founded in 2023 with a simple mission: to make online shopping easier, 
                faster, and more enjoyable for everyone.
              </p>
              <p className="mb-0">
                What started as a small team of passionate e-commerce enthusiasts has grown into 
                a trusted platform serving thousands of customers worldwide.
              </p>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                alt="Our team working" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-3 shadow-sm p-5 mb-5">
            <h2 className="text-center mb-5">Why Choose Us</h2>
            <div className="row g-4">
              {[
                {
                  icon: 'bi-truck',
                  title: 'Fast Shipping',
                  description: 'We partner with reliable logistics providers to ensure quick delivery'
                },
                {
                  icon: 'bi-shield-check',
                  title: 'Secure Payments',
                  description: 'All transactions are encrypted through trusted payment gateways'
                },
                {
                  icon: 'bi-headset',
                  title: '24/7 Support',
                  description: 'Our team is always ready to help with any questions'
                },
                {
                  icon: 'bi-arrow-repeat',
                  title: 'Easy Returns',
                  description: 'Hassle-free return policy for your peace of mind'
                },
                {
                  icon: 'bi-tag',
                  title: 'Best Prices',
                  description: 'Competitive pricing without compromising quality'
                },
                {
                  icon: 'bi-award',
                  title: 'Quality Guarantee',
                  description: 'We stand behind every product we sell'
                }
              ].map((feature, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3 me-3">
                      <i className={`bi ${feature.icon} fs-3`}></i>
                    </div>
                    <div>
                      <h4 className="h5 mb-2">{feature.title}</h4>
                      <p className="text-muted mb-0">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-5">
            <h2 className="text-center mb-5">Meet Our Team</h2>
            <div className="row g-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="card-img-top rounded-top"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="card-body text-center">
                      <h4 className="card-title mb-1">{member.name}</h4>
                      <p className="text-primary mb-2">{member.role}</p>
                      <p className="text-muted small">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      
    </div>
  );
};

export default About;