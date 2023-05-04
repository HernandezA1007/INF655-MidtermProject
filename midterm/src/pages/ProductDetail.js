import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { fetchProductById } from "../services/api";

//const ProductDetail = ({ product }) => {
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await fetchProductById(id);
            setProduct(product);
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product Details</h1>
            <Product product={product} />
        </div>
    );
};


export default ProductDetail;