import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './NavBar.css'

const NavBar = () => {
    const { pathname } = useLocation()
    return (
        <nav style={pathname.includes('slug') ? { display: 'none' } : { display: 'block' }}>
            <div className='flex-wrap md:flex md:py-5 md:px-40 text-white items-center justify-between py-3 bg-indigo-300' >
                <div className="logo-">
                    <NavLink to='/' className='text-3xl font-bold'>Phone Mania</NavLink>
                </div>
                <div className="nagigation py-3 ">
                    <nav className='flex items-center justify-center'>
                        <CustomLink className='px-2 text-xl' to="/products" >Products</CustomLink>
                        <CustomLink className='px-2 text-xl' to="/about" >about</CustomLink>
                        <CustomLink className='px-2 text-xl' to="/contact" >Contact</CustomLink>
                    </nav>
                </div>
            </div >
        </nav>

    );
};

export default NavBar;