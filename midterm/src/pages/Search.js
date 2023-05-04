import React, { useState } from "react";
// import SearchBar from "../components/SearchBar";
// import ProductList from "../components/ProductList";

const Search = ({ products }) => {
    // const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");

    /*
    const handleSearch = (searchTerm) => {
        const searchResults = products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(searchResults);
    };
    */
   const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
   };

   const handleCategoryChange = (event) => {
        setCategory(event.target.value);
   };

   const filteredProducts = products.filter((product) => {
    const matchesSearch = searchTerm
        ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        const matchesCategory = category ? product.category === category : true;
        return matchesSearch && matchesCategory;
   });

   const uniqueCategories = [
         ...new Set(products.map((product) => product.category)),
   ];

    return (
        <div>
            <h1>Search</h1>
            <div className="container">
                <div className="search-grid">
                    <div>
                        {/* <SearchBar onSearch={handleSearch} />
                        <ProductList products={filteredProducts} /> */}
                        <input
                            type="text"
                            placeholder="Search by product name"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <select value={category} onChange={handleCategoryChange}>
                            <option value="">All Categories</option>
                            {uniqueCategories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                    <ul>
                        {filteredProducts.map((product) => (
                            <li key={product.id}>{product.title}</li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;