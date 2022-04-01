import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [searchText, setSearchText] = useState('xyz');

    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.data))
    }, [searchText])

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }
    // console.log(products)
    return (
        <div>
            <h2 className='text-0xl md:text-2xl  text-indigo-600 font-bold py-3'>Welcome To Our Phone Mania Store</h2>
            <input onChange={handleSearch} type="text" placeholder='Search Your Phone' name="" id="" className='border-2 rounded w-full md:w-1/3 p-1'/>
            <div className='grid grid-cols-1 md:grid-cols-3 md:px-40 md:py-10'>
                {
                    products.map(product => <SingleProduct
                        key={product.slug}
                        product={product}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;