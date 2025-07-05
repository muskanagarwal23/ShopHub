import React, { useState } from 'react';

const CheckoutModal = ({
  isOpen,
  onClose,
  cart,
  totalPrice,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    alert('Order placed successfully! (Demo mode)');
    onClose();
    setStep(1);
  };

  if (!isOpen) return null;

  const subtotal = totalPrice;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose} />
      
      {/* Modal */}
      <div className="modal fade show d-block" style={{ zIndex: 1055 }}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h4 className="modal-title">Checkout</h4>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            {/* Progress Steps */}
            <div className="modal-body border-bottom">
              <div className="d-flex align-items-center justify-content-center gap-3 mb-0">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="d-flex align-items-center">
                    <div className={`rounded-circle d-flex align-items-center justify-content-center ${
                      step >= stepNumber 
                        ? 'bg-primary text-white' 
                        : 'bg-light text-muted'
                    }`} style={{ width: '40px', height: '40px' }}>
                      {stepNumber}
                    </div>
                    <span className={`ms-2 ${
                      step >= stepNumber ? 'text-primary fw-bold' : 'text-muted'
                    }`}>
                      {stepNumber === 1 && 'Contact'}
                      {stepNumber === 2 && 'Shipping'}
                      {stepNumber === 3 && 'Payment'}
                    </span>
                    {stepNumber < 3 && <div className="mx-3" style={{ width: '50px', height: '2px', backgroundColor: '#dee2e6' }} />}
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-body p-0">
              <div className="row g-0">
                {/* Form Section */}
                <div className="col-md-8 p-4">
                  {/* Step 1: Contact Information */}
                  {step === 1 && (
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <i className="bi bi-person-circle text-primary me-2"></i>
                        <h5 className="mb-0">Contact Information</h5>
                      </div>
                      
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input
                            id="email"
                            type="email"
                            className="form-control"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label">Phone</label>
                          <input
                            id="phone"
                            type="tel"
                            className="form-control"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="firstName" className="form-label">First Name</label>
                          <input
                            id="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="John"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="lastName" className="form-label">Last Name</label>
                          <input
                            id="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Shipping Information */}
                  {step === 2 && (
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <i className="bi bi-geo-alt text-primary me-2"></i>
                        <h5 className="mb-0">Shipping Address</h5>
                      </div>
                      
                      <div className="row g-3">
                        <div className="col-12">
                          <label htmlFor="address" className="form-label">Address</label>
                          <input
                            id="address"
                            className="form-control"
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            placeholder="123 Main Street"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="city" className="form-label">City</label>
                          <input
                            id="city"
                            className="form-control"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            placeholder="New York"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="state" className="form-label">State</label>
                          <input
                            id="state"
                            className="form-control"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            placeholder="NY"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                          <input
                            id="zipCode"
                            className="form-control"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            placeholder="10001"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Payment Information */}
                  {step === 3 && (
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <i className="bi bi-credit-card text-primary me-2"></i>
                        <h5 className="mb-0">Payment Information</h5>
                      </div>
                      
                      <div className="row g-3">
                        <div className="col-12">
                          <label htmlFor="cardName" className="form-label">Cardholder Name</label>
                          <input
                            id="cardName"
                            className="form-control"
                            value={formData.cardName}
                            onChange={(e) => handleInputChange('cardName', e.target.value)}
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="cardNumber" className="form-label">Card Number</label>
                          <input
                            id="cardNumber"
                            className="form-control"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                          <input
                            id="expiryDate"
                            className="form-control"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="cvv" className="form-label">CVV</label>
                          <input
                            id="cvv"
                            className="form-control"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div className="alert alert-info d-flex align-items-center mt-3">
                        <i className="bi bi-shield-lock me-2"></i>
                        <small>Your payment information is secure and encrypted</small>
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Summary */}
                <div className="col-md-4 bg-light p-4">
                  <h5 className="mb-4">Order Summary</h5>
                  
                  <div className="mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="d-flex align-items-center mb-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="rounded me-3"
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                        <div className="flex-grow-1">
                          <p className="mb-1 small fw-bold" style={{
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {item.name}
                          </p>
                          <small className="text-muted">Qty: {item.quantity}</small>
                        </div>
                        <span className="small fw-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <hr />

                  <div className="small">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping:</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Tax:</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between fw-bold h5">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {shipping === 0 && (
                    <div className="alert alert-success mt-3 text-center small">
                      ✅ Free Shipping Eligible!
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <div className="d-flex justify-content-between w-100">
                <div>
                  {step > 1 && (
                    <button className="btn btn-outline-secondary" onClick={handlePrevStep}>
                      Back
                    </button>
                  )}
                </div>
                
                <div>
                  {step < 3 ? (
                    <button className="btn btn-primary" onClick={handleNextStep}>
                      Continue
                    </button>
                  ) : (
                    <button className="btn btn-success" onClick={handleSubmit}>
                      Place Order (${total.toFixed(2)})
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;