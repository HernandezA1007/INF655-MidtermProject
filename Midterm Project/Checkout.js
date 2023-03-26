//```jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Checkout({cartItems}) {
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        email: '',
        address: '',
    });
    const history = useHistory();

    const total = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setShippingInfo((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // todo: submit form and clear cart
        history.push('/confirmation');
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={shippingInfo.name} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={shippingInfo.email} onChange={handleInputChange} />
                </label>
                <label>
                    Address:
                    <textarea name="address" value={shippingInfo.address} onChange={handleInputChange} />
                </label>
                {/* <h3>Total: ${total}</h3> */}
                <h3>Order Summary:</h3>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} x {item.quantity} = ${item.price * item.quantity}
                        </li>
                    ))}
                </ul>
                <h3>Total: ${total}</h3>
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
}

export default Checkout;
