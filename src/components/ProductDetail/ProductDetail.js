import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const navigate = useNavigate()

    const { slug } = useParams()

    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `https://openapi.programming-hero.com/api/phone/${slug}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data.data))
    }, [slug])

    return (
        <div>
            <button className='flex bg-orange-500 w-full p-4 text-white mb-2 text-xl justify-start items-center' onClick={() => navigate('/products')}>
                <FontAwesomeIcon className='p-2' icon={faAngleLeft}></FontAwesomeIcon>
                Back
            </button>
            <div>
            <img className='mx-auto' src={product.image} alt="" />
            
            <p>{product.name}</p>
            </div>
            

        </div>
    );
};

export default ProductDetail;