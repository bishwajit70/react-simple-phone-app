import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { slug } = useParams()

    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `https://openapi.programming-hero.com/api/phone/${slug}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data.data))
    }, [slug])
    console.log(product);

    return (
        <div>
            <p>{product.name}</p>
            <img src={product.image} alt="" />

        </div>
    );
};

export default ProductDetail;