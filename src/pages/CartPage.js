import React, { useContext } from "react";
import CartItem from "../components/CartItem"; // cart -> cartitem
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { Link } from "react-router-dom";


/*
const CartPage = ({ cartItems }) => {
    return (
        <div>
            <h1>Cart</h1>
            <Cart cartItems={cartItems} />
        </div>
    );
};
*/
const CartPage = ({ cartItems, removeFromCart }) => {
    // if (cartItems.length === 0) {
    //     return <div>Your cart is empty.</div>
    // }

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    // const totalPrice = cartItems.reduce((sum, item) => sum +item.price * item.quantity, 0);

    const { currentUser } = useContext(); //AuthContext
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (currentUser) {
        navigate.push("/checkout");
        } else {
        navigate.push("/signin");
        }
    };

    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                    ))}
                </ul>
            )}
            {/* <p>Total Price: ${totalPrice.toFixed(2)}</p>
            {cartItems.length > 0 && <Link to="/checkout"><button>Checkout</button></Link>} */}
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            {cartItems.length > 0 && (
                <button onClick={handleCheckout}>Checkout</button>
            )}
        </div>
    );
};

export default CartPage;