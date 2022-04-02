import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleProduct = (props) => {
    const { brand, image, phone_name, slug } = props.product

    const navigate = useNavigate();

    const showDetail = () => {
        const path = `/slug/${slug}`;
        navigate(path)
    }

    return (
        <div className='m-5 border-2 rounded-md'>
            <img className='w-3/4 mx-auto p-2' src={image} alt="" />
            <div>
                <h2 className='text-2xl py-1 font-semibold'>{phone_name}</h2>
                <p className='text-xl pb-2'>{brand}</p>
                <div className='flex justify-between px-2 pb-3'>
                    <Link className='bg-orange-500 text-white p-3 rounded-md' to={'/slug/' + slug}>Add To Cart</Link>
                    <button className='bg-orange-500 text-white p-3 rounded-md' onClick={showDetail}>See Details</button>
                </div>

            </div>

        </div>
    );
};

export default SingleProduct;