import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ onAddToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState({
        id: 1,
        name: 'Product 1',
        // product image placeholder
        image: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081',
        description: 'Product description',
    });

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => onAddToCart({...product, quantity: 1})}>Add to Cart</button>
        </div>
    );
}

export default ProductDetail;
