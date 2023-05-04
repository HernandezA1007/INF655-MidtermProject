import React from "react";
import Product from "../components/Product"; // ProductList 
import { useState } from "react";

const Home = ({ products, addToCart }) => { 
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = products.filter((product) => 
        selectedCategory ? product.category === selectedCategory : true
    );

    return (
        <div>
            <h1>Home</h1>
            <div className="container">
                    <label htmlFor="category">Category: </label>
                    <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">All</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                        <option value="women's clothing">Women's Clothing</option>
                        {/* Add other categories... */}
                    </select>

                    {/* <ul> */}
                    <div className="products-grid">
                        {/* {products.map((product) => ( */}
                        {filteredProducts.map((product) => (
                            // <li key={product.id}>
                            <Product key={product.id} product={product} addToCart={addToCart} />
                        ))}
                            {/* <button onClick={() => addToCart(product)}>Add to cart</button> */}
                            {/* // </li> */}
                    {/* </ul> */}
                    </div>
            </div>
        </div>
    );
};

export default Home;