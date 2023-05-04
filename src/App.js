// Antonio Hernandez
// INF655
// Muvva
// 4-14-23

//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Switch is older version, 
// As of React Router v6, import and usage of components have changed..
import useLocalStorage from "./useLocalStorage"; // because items aren't being stored across page refreshes
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import CartPage from "./pages/CartPage";
import { fetchProducts } from "./services/api";
import Navigation from "./components/Navigation";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
// 
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";


/* Template
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
const App = () => {
  // Add to fetch products and manage cart items here..
  // .. logic and data

  // Below is placeholder empty cart
  /*
  const products = [
    { id: 1, name: "Product 1", description: "Description for product 1", price: 10 },
    { id: 2, name: "Product 2", description: "Description for product 2", price: 20 },
  ]
    const cartItems = [];
  */
  const [products, setProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    fetchData();
  }, []);


  // handles adding and removing items from the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let updatedItems;
      if (existingItem) {
        // return prevItems.map((item) => item.id === product.id 
        //   ? { ...item, quantity: item.quantity + 1 } : item);
        updatedItems = prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item );
      } else {
        // return [...prevItems, { ...product, quantity: 1 }];
        updatedItems = [...prevItems, { ...product, quantity: 1 }];
      }
      console.log("Updated cart items:", updatedItems);
      return updatedItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.id === productId);
      if (item.quantity > 1) {
        return prevItems.map((item) => item.id === productId 
        ? { ...item, quantity: item.quantity - 1 } : item);
      } else {
        return prevItems.filter((item) => item.id !== productId);
      }
    });
  };

  // For checkout
  const clearCart = () => {
    setCartItems([]);
  };


  return (

      <Router>
        <div>
          <Navigation />
            <Routes>
              {/*}
              <Route path="/" exact component={() => <Home products={products} />} />
              <Route path="/product/:id" component={() => <ProductDetail product={products[0]} />} />
              <Route path="/search" component={() => <Search products={products} />} />
              <Route path="/cart" component={() => <CartPage cartItems={cartItems} />} />
              */}
              <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
              <Route path="/home" element={<Home products={products} addToCart={addToCart} />} />
              {/*<Route path="/products/:id" element={<ProductDetail products={products} />} /> */}
              <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
              <Route path="/search" element={<Search products={products} addToCart={addToCart} />} />
              {/* <Route path="/cart" component={() => <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} /> */}
              <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
              <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/signin" element={<SignUpForm />} />
              <Route path="/signup" element={<LogInForm />} />
            </Routes>
        </div>
      </Router>

  );
};

export default App;


// I see what I did wrong now, I combined my pages with the components all in one file each
// I also made it so the props were merged into the ...