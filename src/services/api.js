// src/services/api.js
import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching prodcuts:", error);
        return [];
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null; // instead of []
    }
};

