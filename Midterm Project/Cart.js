import React from 'react';

function Cart({cartItems, onRemoveFromtCart}) {
    const total = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => onRemoveFromtCart(item)}>Remove from cart</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
        </div>
    );
}

export default Cart;
