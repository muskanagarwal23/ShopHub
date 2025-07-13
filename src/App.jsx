import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import About from './pages/About';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartProvider';
import BestSeller from './components/Footer/BestSeller';
import Blog from './components/Footer/Blog';
import ContactPage from './components/Footer/Contact';
import ReturnsRefund from './components/Footer/Returns';
import HelpCenter from './components/Footer/HelpCenter';



const App = () => {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/best-sellers" element={<BestSeller />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/returns" element={<ReturnsRefund/>} />
          <Route path="/help" element={<HelpCenter/>} />
         
        </Routes>
      </CartProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;