import React from 'react';
import { Link } from 'react-router-dom';

function Product({id, name, image, price, onAddToCart}) {
    return (
        <div className="product">
            {/* <img src={product.image} alt={product.name} /> */}
            {/* <h3>{product.name}</h3> */}

            <Link to={`/product/${id}`}>
                <img scr={image} alt={name} />
                <h3>{name}</h3>
            </Link>
            {/* <p>{product.description}</p> */}
            {/* <p>${product.price}</p> */}
            
            <p>${price}</p>
            <button onClick={() => onAddToCart({id, name, image, price})}>Add to Cart</button>
        </div>
    );
}

export default Product;
