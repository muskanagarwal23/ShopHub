import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Accordion, Badge, Tab, Nav } from 'react-bootstrap';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { BsArrowRight, BsTruck, BsShieldCheck } from 'react-icons/bs';
import { useCartContext } from '../../context/CartProvider';
import { toast } from 'react-toastify';

const BestSeller = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const { addToCart } = useCartContext();

  const bestSellers = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 89.99,
      image: "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "High-fidelity sound, noise cancellation, and 30-hour battery life.",
      rating: 4.8,
      category: 'electronics'
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 129.99,
      image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
      description: "Track your health, workouts, and notifications on the go.",
      rating: 4.7,
      category: 'health'
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 49.99,
      image: "https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg",
      description: "Rich bass, waterproof, and 12-hour playtime.",
      rating: 4.6,
      category: 'electronics'
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: 199.99,
      image: "https://cdn.moglix.com/p/djsrKBRPVjQIC-xxlarge.jpg",
      description: "Lumbar support, adjustable height, and breathable mesh.",
      rating: 4.9,
      category: 'home'
    },
    {
      id: 5,
      name: "4K Action Camera",
      price: 159.99,
      image: "https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Capture adventures in stunning 4K with waterproof housing.",
      rating: 4.5,
      category: 'electronics'
    },
    {
      id: 6,
      name: "Electric Toothbrush",
      price: 39.99,
      image: "https://assets.boots.com/content/dam/boots/shop-by-department/electrical/2024---2025/9a/9b_Electrical_STB_OralB_supplied.dam.ts%3D1744018799962.png",
      description: "Sonic cleaning, 5 modes, and 2-week battery life.",
      rating: 4.7,
      category: 'health'
    },
  ];

  const testimonials = [
    {
      name: "Ava S.",
      text: "Absolutely love the wireless headphones! The sound quality is amazing and the battery lasts forever.",
    },
    {
      name: "Liam T.",
      text: "The fitness watch keeps me motivated every day. Super easy to use and syncs with my phone perfectly.",
    },
    {
      name: "Priya R.",
      text: "Fast shipping and great customer service. The office chair has made working from home so much better!",
    },
  ];

  const faqs = [
    {
      question: "How do I know these are the best sellers?",
      answer: "Our best sellers are determined by sales data, customer reviews, and overall popularity in the last 90 days.",
    },
    {
      question: "Can I return a best seller product?",
      answer: "Yes! All best sellers are covered by our 30-day return policy. See our Returns Refund page for details.",
    },
    {
      question: "Are there any discounts on best sellers?",
      answer: "We frequently run promotions on top products. Check the Deals page or subscribe to our newsletter for updates.",
    },
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'home', name: 'Home & Office' },
    { id: 'health', name: 'Health & Fitness' }
  ];

  const benefits = [
    {
      icon: <BsTruck className="text-primary fs-4" />,
      title: "Free Shipping",
      description: "On all orders over $50"
    },
    {
      icon: <BsShieldCheck className="text-primary fs-4" />,
      title: "2-Year Warranty",
      description: "Coverage on all products"
    },
    {
      icon: <FaStar className="text-primary fs-4" />,
      title: "Customer Favorite",
      description: "Highly rated by buyers"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-warning" />);
      }
    }
    return stars;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const filteredProducts = activeTab === 'all' 
    ? bestSellers 
    : bestSellers.filter(product => product.category === activeTab);

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-10 py-5">
          <Container className="text-center py-4">
            <h1 className="display-5 fw-bold text-dark mb-3">Best Sellers</h1>
            <p className="lead text-muted mb-4">
              Shop our most loved products - customer favorites with proven quality
            </p>
            <Badge bg="success" className="fs-6 fw-normal mb-3">
              <FaStar className="me-2" />
              Customer Rated 4.7+ Stars
            </Badge>
          </Container>
        </section>

        {/* Category Tabs */}
        <Container className="mt-4">
          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
            <Nav variant="tabs" className="justify-content-center">
              {categories.map(category => (
                <Nav.Item key={category.id}>
                  <Nav.Link eventKey={category.id}>{category.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Tab.Container>
        </Container>

        {/* Product Grid */}
        <Container className="py-5">
          <Row className="g-4">
            {filteredProducts.map(product => (
              <Col key={product.id} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0 hover-shadow transition-all">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top"
                      src={product.image} 
                      alt={product.name}
                      className="p-4"
                      style={{height: '200px', objectFit: 'contain'}}
                    />
                    {product.rating >= 4.5 && (
                      <Badge bg="success" className="position-absolute top-0 start-0 m-2">
                        Top Rated
                      </Badge>
                    )}
                  </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="mb-0">{product.name}</Card.Title>
                      <div className="text-primary fw-bold">${product.price.toFixed(2)}</div>
                    </div>
                    <div className="mb-2">
                      {renderStars(product.rating)}
                      <span className="ms-2 small text-muted">({product.rating})</span>
                    </div>
                    <Card.Text className="text-muted small">{product.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <button 
                      className="btn btn-primary w-100"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart <BsArrowRight className="ms-2" />
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Benefits Section */}
        <section className="bg-light py-5 border-top">
          <Container>
            <Row className="g-4">
              {benefits.map((benefit, index) => (
                <Col key={index} md={4}>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      {benefit.icon}
                    </div>
                    <div>
                      <h5 className="mb-1">{benefit.title}</h5>
                      <p className="text-muted small mb-0">{benefit.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Testimonials */}
        <section className="container py-5">
          <h2 className="text-center mb-5">What Our Customers Say</h2>
          <Row className="g-4">
            {testimonials.map((t, idx) => (
              <Col key={idx} md={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="mb-3">
                      {renderStars(5)}
                    </div>
                    <blockquote className="mb-0">
                      <p className="font-italic">"{t.text}"</p>
                      <footer className="text-primary mt-3">— {t.name}</footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* FAQ Section */}
        <section className="bg-light py-5 border-top">
          <Container>
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Accordion defaultActiveKey="0" flush>
                  {faqs.map((faq, idx) => (
                    <Accordion.Item key={idx} eventKey={idx.toString()} className="mb-3 border">
                      <Accordion.Header>
                        {faq.question}
                      </Accordion.Header>
                      <Accordion.Body className="small">
                        {faq.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BestSeller;