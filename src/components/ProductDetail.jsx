import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/product")
    }
    return (
        <div>
            <h2>Product {id}</h2>
            <button onClick={handleClick}>save</button>
        </div>
    )
}

export default ProductDetail