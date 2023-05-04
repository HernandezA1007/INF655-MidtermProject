import React from "react";
import ProductList from "./ProductList";

const Cart = ({ cartItem }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ProductList products={cartItem} />
        </div>
    );
};

export default Cart;