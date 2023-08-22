import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import queryString from 'query-string';

const Product = () => {
    const location = useLocation();
    const result = queryString.parse(location.search);
    console.log(result.sortBy);
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
    ]
    return (
        <ul>
            {products.map(item => (
                <li key={item.id}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Product