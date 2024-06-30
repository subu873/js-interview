import React, { useState, useEffect, Fragment, useRef } from 'react';

const Products = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const timer = useRef(null)
    // Debounce function definition
    const debounceMethod = (callback, delay = 300) => {
        return function (...args) {
            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    };

    // Function to handle search based on input value
    const handleSearch = (searchTerm) => {
        const result = data.filter((key) =>
            key.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(result);

    };

    // Debounced search function
    const debouncedSearch = debounceMethod(handleSearch, 1000);

    // Function to handle input change
    const handleInput = (e) => {
        setInputSearch(e.target.value);
        debouncedSearch(e.target.value); // Call debounce search function with input value
    };

    // Simulated API call using useEffect to fetch initial data
    useEffect(() => {
        const fetchSampleData = async () => {
            // Simulated API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const SAMPLE_DATA = [
                { id: 1, title: 'Product One' },
                { id: 2, title: 'Product Two' },
                { id: 3, title: 'Another Product' },
                { id: 4, title: 'Test Product' },
            ];
            setData(SAMPLE_DATA);
            setFilteredData(SAMPLE_DATA); // Initially show all data
        };

        fetchSampleData();
    }, []);

    return (
        <Fragment>
            <input
                type="text"
                className="form-control"
                value={inputSearch}
                onChange={handleInput} // Handle input change
                placeholder="Search..."
            />

            {!!filteredData && filteredData.length > 0 && (
                <div>
                    {filteredData.map((key) => (
                        <div className="card" key={key.id}>
                            {key.title}
                        </div>
                    ))}
                </div>
            )}
        </Fragment>
    );
};

export default Products;
