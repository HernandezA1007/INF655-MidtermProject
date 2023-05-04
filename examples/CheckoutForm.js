import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";


const CheckoutForm = ({ cartItems, clearCart }) => {
    const [shippingAddress, setShippingAddress] = useState({});
    const [billingAddress, setBillingAddress] = useState({});
    const [paymentMethod, setPaymentMethod] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
          return;
        }
    
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });
    
        if (error) {
          setError(error.message);
        } else {
          try {
            const orderRef = db.collection("orders").doc();
            const order = {
              id: orderRef.id,
              userId: currentUser.uid,
              cartItems,
              shippingAddress,
              billingAddress,
              paymentMethod: paymentMethod.id,
              createdAt: new Date(),
            };
            await orderRef.set(order);
            clearCart();
            history.push("/thankyou");
          } catch (error) {
            console.error(error);
            setError("Error placing order. Please try again.");
          }
        }
      };
    
      const handleShippingAddressChange = (e) => {
        setShippingAddress({
          ...shippingAddress,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleBillingAddressChange = (e) => {
        setBillingAddress({
          ...billingAddress,
          [e.target.name]: e.target.value,
        });
      };


    return (
    <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <div>
        <h2>Shipping Address</h2>
        <div>
            <label htmlFor="shippingName">Name:</label>
            <input
            type="text"
            id="shippingName"
            name="name"
            onChange={handleShippingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="shippingAddress1">Address 1:</label>
            <input
            type="text"
            id="shippingAddress1"
            name="address1"
            onChange={handleShippingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="shippingAddress2">Address 2:</label>
            <input
            type="text"
            id="shippingAddress2"
            name="address2"
            onChange={handleShippingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="shippingCity">City:</label>
            <input
            type="text"
            id="shippingCity"
            name="city"
            onChange={handleShippingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="shippingState">State:</label>
            <input
            type="text"
            id="shippingState"
            name="state"
            onChange={handleShippingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="shippingZip">Zip:</label>
            <input
            type="text"
            id="shippingZip"
            name="zip"
            onChange={handleShippingAddressChange}
            />
        </div>
        </div>
        <div>
        <h2>Billing Address</h2>
        <div>
            <label htmlFor="billingName">Name:</label>
            <input
            type="text"
            id="billingName"
            name="name"
            onChange={handleBillingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="billingAddress1">Address 1:</label>
            <input
            type="text"
            id="billingAddress1"
            name="address1"
            onChange={handleBillingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="billingAddress2">Address 2:</label>
            <input
            type="text"
            id="billingAddress2"
            name="address2"
            onChange={handleBillingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="billingCity">City:</label>
            <input
            type="text"
            id="billingCity"
            name="city"
            onChange={handleBillingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="billingState">State:</label>
            <input
            type="text"
            id="billingState"
            name="state"
            onChange={handleBillingAddressChange}
            />
        </div>
        <div>
            <label htmlFor="billingZip">Zip:</label>
            <input
            type="text"
            id="billingZip"
            name="zip"
            onChange={handleBillingAddressChange}
            />
        </div>
        </div>
        <div>
        <h2>Payment Information</h2>
        <CardElement />
        </div>
        <button disabled={!stripe}>Submit Payment</button>
    </form>
    );
};

