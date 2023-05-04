
import React from "react";

const CartItem = ({ item, removeFromCart }) => {
    const handleRemove = () => {
        removeFromCart(item.id);
    };

    return (
        <li>
            {item.title} - {item.quantity} x ${item.price}
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
};

export default CartItem;