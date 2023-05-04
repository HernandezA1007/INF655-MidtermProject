import { useState } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems, clearCart }) => {
    // const [formData, setFormData] = useState({
        // firstName: "",
        // lastName: "",
        // email: "",
        // address: "",
        // city: "",
        // state: "",
        // zip: "",
    // });
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form data:", formData);
    // };
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        clearCart();
        navigate("/thankyou");
    };

    return (
        <div>
            <h1>Checkout</h1>

            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            )}
            <p>Total Price: ${totalPrice.toFixed(2)}</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label htmlFor="state">State</label>
                <input
                    id="state"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <label htmlFor="zip">Zip</label>
                <input
                    id="zip"
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Checkout;