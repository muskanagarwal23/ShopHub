import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useCartContext } from '../context/CartProvider';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart, getTotalItems } = useCartContext();

  const handlePlaceOrder = () => {
    // In a real app, you would process payment here
    clearCart();
    navigate('/order-confirmation');
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar getTotalItems={getTotalItems} />
      
      <main className="flex-grow-1 container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white border-0 py-3">
                <h2 className="mb-0 fw-bold">Checkout</h2>
                <p className="text-muted mb-0 small">Complete your purchase</p>
              </div>
              
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-7">
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3 border-bottom pb-2">Contact Information</h5>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="fw-bold mb-3 border-bottom pb-2">Shipping Address</h5>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="firstName" className="form-label">First Name</label>
                          <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="lastName" className="form-label">Last Name</label>
                          <input type="text" className="form-control" id="lastName" />
                        </div>
                        <div className="col-12">
                          <label htmlFor="address" className="form-label">Address</label>
                          <input type="text" className="form-control" id="address" />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="city" className="form-label">City</label>
                          <input type="text" className="form-control" id="city" />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="state" className="form-label">State</label>
                          <select className="form-select" id="state">
                            <option>Select State</option>
                            <option>California</option>
                            <option>New York</option>
                            <option>Texas</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="zip" className="form-label">ZIP</label>
                          <input type="text" className="form-control" id="zip" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="fw-bold mb-3 border-bottom pb-2">Payment Method</h5>
                      <div className="card border-0 bg-light p-3 mb-3">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" defaultChecked />
                          <label className="form-check-label fw-medium" htmlFor="creditCard">
                            Credit Card
                          </label>
                        </div>
                        <div className="mt-3 ps-4">
                          <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Card Number</label>
                            <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="row g-3">
                            <div className="col-md-6">
                              <label htmlFor="expiry" className="form-label">Expiry Date</label>
                              <input type="text" className="form-control" id="expiry" placeholder="MM/YY" />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="cvv" className="form-label">CVV</label>
                              <input type="text" className="form-control" id="cvv" placeholder="123" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card border-0 bg-light p-3">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" />
                          <label className="form-check-label fw-medium" htmlFor="paypal">
                            PayPal
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }}>
                      <div className="card-header bg-white border-0 py-3">
                        <h5 className="mb-0 fw-bold">Order Summary</h5>
                      </div>
                      <div className="card-body">
                        <div className="mb-3">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Subtotal ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}):</span>
                            <span className="fw-medium">${subtotal.toFixed(2)}</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Shipping:</span>
                            <span className="fw-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Tax (8%):</span>
                            <span className="fw-medium">${tax.toFixed(2)}</span>
                          </div>
                          <hr className="my-3" />
                          <div className="d-flex justify-content-between fw-bold h5">
                            <span>Total:</span>
                            <span className="text-primary">${total.toFixed(2)}</span>
                          </div>
                        </div>

                        <div className="alert alert-info border-0 bg-light">
                          <i className="bi bi-info-circle me-2"></i>
                          This is a demo checkout. No real payments will be processed.
                        </div>

                        <div className="d-grid mt-3">
                          <button 
                            className="btn btn-success btn-lg py-3 fw-bold rounded-1"
                            onClick={handlePlaceOrder}
                          >
                            <i className="bi bi-lock-fill me-2"></i> Place Order - ${total.toFixed(2)}
                          </button>
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

export default Checkout;