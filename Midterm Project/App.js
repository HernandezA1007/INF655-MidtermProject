// Antonio Hernandez
// INF655
// Muvva
// 3-25-23

import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home"; // Home page
import ProductDetail from "./ProductDetail"; // Product Detail page
import Search from "./Search"; // Search page
import Cart from "./Cart"; // Cart page
import Checkout from "./Checkout"; // Checkout page - Cart

function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product, product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        /*
        if (existingItem) {
            setCartItems((prevState) =>
                prevState.map((item) => (item.id === product.id ? {prevState, { ...product, quantity: 1 }]);
            );}
        */
       // broken code?
        if (existingItem) {
            setCartItems((prevState) => 
                prevState.map((item) => (item.id === product.id ? { ...product, quantity: 1 } : item)));
        }
        };
    const handleRemoveFromCart = (item) => {
        setCartItems((prevState) => prevState.filter((cartItem) => cartItem.id !== item.id));
    };

    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route exact path="/">
                        <Home />
                    </Route>
                    {/* <Route path="/product/:id" component={ProductDetail} /> */}
                    <Route path="/product/:id">
                        <ProductDetail onAddToCart={handleAddToCart} />
                    </Route>
                    {/* <Route path="/search" component={Search} /> */}
                    <Route path="/search">
                        <Search />
                    </Route>
                    {/* <Route path="/cart" component={Cart} /> */}
                    <Route path="/cart">
                        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
                    </Route>
                    {/* <Route path="/checkout" component={Checkout} /> */}
                    <Route path="/checkout">
                        <Checkout cartItems={cartItems} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
