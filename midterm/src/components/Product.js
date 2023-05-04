import React from "react";

const Product = ({ product, addToCart }) => {
    return (
        <div className="product">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="product-image" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;