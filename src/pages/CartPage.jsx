import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useCartContext } from '../context/CartProvider';

const CartPage = () => {
  const navigate = useNavigate();
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    clearCart
  } = useCartContext();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar getTotalItems={getTotalItems} />

      <main className="flex-grow-1 container py-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4 border-0">
              <div className="card-header bg-white border-0 py-3">
                <h4 className="mb-0 fw-bold">Your Shopping Cart ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})</h4>
              </div>
              <div className="card-body p-0">
                {cart.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-cart-x display-1 text-muted"></i>
                    <h3 className="mt-3 fw-bold">Your cart is empty</h3>
                    <p className="text-muted mb-4">
                      Looks like you haven't added anything to your cart yet
                    </p>
                    <button 
                      className="btn btn-primary mt-3 px-4 py-2 rounded-pill"
                      onClick={() => navigate('/products')}
                    >
                      <i className="bi bi-arrow-left me-2"></i> Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="list-group list-group-flush">
                    {cart.map((item) => (
                      <div key={item.id} className="list-group-item py-3 border-0 border-bottom">
                        <div className="row align-items-center">
                          <div className="col-3 col-md-2">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="img-fluid rounded-3 shadow-sm"
                              style={{ height: '90px', width: '90px', objectFit: 'cover' }}
                            />
                          </div>
                          <div className="col-5 col-md-6">
                            <h6 className="mb-1 fw-bold">{item.name}</h6>
                            <p className="small text-muted mb-2">${item.price.toFixed(2)}</p>
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-outline-secondary btn-sm rounded-circle"
                                style={{ width: '30px', height: '30px' }}
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <i className="bi bi-dash"></i>
                              </button>
                              <span className="mx-3 fw-bold">{item.quantity}</span>
                              <button
                                className="btn btn-outline-secondary btn-sm rounded-circle"
                                style={{ width: '30px', height: '30px' }}
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <i className="bi bi-plus"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-4 col-md-4 text-end">
                            <p className="mb-1 fw-bold fs-5">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                              className="btn btn-link text-danger small p-0"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <i className="bi bi-trash-fill me-1"></i> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="list-group-item py-3 bg-light">
                      <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={clearCart}
                      >
                        <i className="bi bi-trash me-1"></i> Clear Cart
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {cart.length > 0 && (
            <div className="col-lg-4">
              <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }}>
                <div className="card-header bg-white border-0 py-3">
                  <h5 className="mb-0 fw-bold">Order Summary</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Subtotal:</span>
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
                    <div className="d-flex justify-content-between fw-bold h5 mb-4">
                      <span>Total:</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="d-grid gap-3">
                    <button 
                      className="btn btn-primary py-2 rounded-pill fw-bold"
                      onClick={() => navigate('/checkout')}
                    >
                      <i className="bi bi-credit-card me-2"></i> Proceed to Checkout
                    </button>
                    <button 
                      className="btn btn-outline-secondary py-2 rounded-pill"
                      onClick={() => navigate('/products')}
                    >
                      <i className="bi bi-arrow-left me-2"></i> Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;