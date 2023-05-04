import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search for a product"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;