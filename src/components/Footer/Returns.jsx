import React from 'react';
import { Container, Row, Col, Card, Accordion, Badge } from 'react-bootstrap';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { 
  FaBoxOpen, 
  FaShippingFast, 
  FaExchangeAlt, 
  FaMoneyBillWave,
  FaClock,
  FaCreditCard,
  FaStore,
  FaQuestionCircle
} from 'react-icons/fa';
import { BsCheckCircleFill, BsBoxSeam } from 'react-icons/bs';

const ReturnsRefund = () => {
  const returnSteps = [
    {
      step: 1,
      icon: <FaBoxOpen className="text-primary fs-3" />,
      title: "Package Your Item",
      description: "Include all original packaging and accessories",
      duration: "1-2 days"
    },
    {
      step: 2,
      icon: <FaShippingFast className="text-primary fs-3" />,
      title: "Create Return Request",
      description: "Initiate return in your account dashboard",
      duration: "5 minutes"
    },
    {
      step: 3,
      icon: <FaExchangeAlt className="text-primary fs-3" />,
      title: "Ship Your Return",
      description: "Use the provided return label",
      duration: "3-5 business days"
    },
    {
      step: 4,
      icon: <FaMoneyBillWave className="text-primary fs-3" />,
      title: "Receive Refund",
      description: "Refund processed within 5-7 business days",
      duration: ""
    }
  ];

  const returnPolicy = [
    {
      icon: <BsCheckCircleFill className="text-success fs-4" />,
      title: "Eligibility",
      description: "Items must be returned within 30 days of delivery in original condition.",
      badge: "30-Day Policy"
    },
    {
      icon: <FaClock className="text-warning fs-4" />,
      title: "Processing Time",
      description: "Returns typically processed within 3 business days of receipt at our warehouse.",
      badge: "Fast Processing"
    },
    {
      icon: <FaCreditCard className="text-info fs-4" />,
      title: "Refund Method",
      description: "Refunds will be issued to the original payment method within 5-7 business days.",
      badge: "Original Payment"
    },
    {
      icon: <FaStore className="text-secondary fs-4" />,
      title: "In-Store Returns",
      description: "Eligible items can be returned to any of our physical store locations.",
      badge: "Store Option"
    }
  ];

  const faqs = [
    {
      question: "How do I start a return?",
      answer: "Log into your account, go to 'My Orders' and select 'Return Item'. Follow the prompts to generate your return label."
    },
    {
      question: "What if my item is damaged or defective?",
      answer: "Contact our support team immediately. We'll arrange a free return and expedited replacement."
    },
    {
      question: "Do I have to pay for return shipping?",
      answer: "We provide free return shipping for defective items or our errors. Otherwise, a small return fee may apply."
    },
    {
      question: "Can I exchange an item instead of returning it?",
      answer: "Yes! During the return process, you can select exchange and choose your preferred replacement item."
    },
    {
      question: "How long until I receive my refund?",
      answer: "Refunds are processed within 5-7 business days after we receive your return. Bank processing may take additional time."
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-primary bg-opacity-10 py-5">
          <Container className="text-center py-4">
            <h1 className="display-5 fw-bold text-dark mb-3">Returns & Refunds</h1>
            <p className="lead text-muted mb-4">
              Our hassle-free return policy ensures your complete satisfaction
            </p>
            <Badge bg="success" className="fs-6 fw-normal mb-3">
              <BsBoxSeam className="me-2" />
              Most returns processed in 3-5 business days
            </Badge>
          </Container>
        </section>

        <Container className="py-5">
          {/* Return Process Steps */}
          <section className="mb-5">
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                <h2 className="h4 mb-4 text-center fw-bold">Easy 4-Step Return Process</h2>
                <Row className="g-4">
                  {returnSteps.map((step) => (
                    <Col key={step.step} md={6} lg={3}>
                      <Card className="h-100 border-0 shadow-sm-hover transition-all">
                        <Card.Body className="text-center p-4">
                          <div className="mb-3">
                            <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center" 
                                 style={{width: "70px", height: "70px"}}>
                              {step.icon}
                            </div>
                          </div>
                          <h3 className="h5 mb-2 fw-bold">Step {step.step}: {step.title}</h3>
                          <p className="text-muted mb-2">{step.description}</p>
                          {step.duration && (
                            <small className="text-primary fw-semibold">
                              <FaClock className="me-1" />
                              {step.duration}
                            </small>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </section>

          {/* Policies Section */}
          <section className="mb-5">
            <Row className="g-4">
              {/* Return Policy */}
              <Col lg={6}>
                <Card className="shadow-sm h-100">
                  <Card.Body className="p-4">
                    <h2 className="h4 mb-4 fw-bold d-flex align-items-center">
                      <BsCheckCircleFill className="text-primary me-2" />
                      Return Policy
                    </h2>
                    <Row className="g-3">
                      {returnPolicy.map((item, index) => (
                        <Col key={index} md={6}>
                          <Card className="h-100 border-0 shadow-sm-hover">
                            <Card.Body className="p-3">
                              <div className="d-flex align-items-start">
                                <div className="me-3 mt-1">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="d-flex justify-content-between align-items-start">
                                    <h3 className="h5 mb-2 fw-bold">{item.title}</h3>
                                    <Badge bg="light" text="dark" className="ms-2">
                                      {item.badge}
                                    </Badge>
                                  </div>
                                  <p className="text-muted small mb-0">{item.description}</p>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              {/* FAQ Section */}
              <Col lg={6}>
                <Card className="shadow-sm h-100">
                  <Card.Body className="p-4">
                    <h2 className="h4 mb-4 fw-bold d-flex align-items-center">
                      <FaQuestionCircle className="text-primary me-2" />
                      Frequently Asked Questions
                    </h2>
                    <Accordion defaultActiveKey="0" flush>
                      {faqs.map((faq, index) => (
                        <Accordion.Item key={index} eventKey={index.toString()} className="mb-2 border">
                          <Accordion.Header className="fw-semibold">
                            {faq.question}
                          </Accordion.Header>
                          <Accordion.Body className="small">
                            {faq.answer}
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Additional Info Section */}
          <section>
            <Card className="border-0 bg-light">
              <Card.Body className="p-4 text-center">
                <h3 className="h5 mb-3 fw-bold">Need More Help?</h3>
                <p className="mb-4">
                  Our customer service team is available 24/7 to assist with your returns and refunds.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="/contact" className="btn btn-primary px-4">
                    Contact Support
                  </a>
                  <a href="/account/returns" className="btn btn-outline-primary px-4">
                    Track Your Return
                  </a>
                </div>
              </Card.Body>
            </Card>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnsRefund;