import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import CartProvider from './contexts/CartContext.js';
import ProductsProvider from './contexts/ProductsContext.js';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import ProductProvider from './contexts/ProductContext.js';
import ProductDetails from './pages/ProductDetails.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/product/:id"
              element={
                <ProductProvider>
                  <ProductDetails />
                </ProductProvider>
              }
            ></Route>
          </Routes>
        </App>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
