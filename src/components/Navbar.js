import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onPackagesClick }) => {
    return (
        <nav className="absolute top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center p-4 text-white">
                <h1 className="text-3xl font-bold ">Travel</h1>
                <ul className="flex gap-6">
                    <li><Link to="/" className="hover:text-red-500 font-bold">Home</Link></li>
                    <li><button className='hover:text-red-500 font-bold'>Services</button></li>
                    <li><Link to="/about" className="hover:text-red-500 font-bold">About Us</Link></li>
                    <li><button onClick={onPackagesClick} className="font-bold">Packages</button></li>
                </ul>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Get In Touch</button>
            </div>
        </nav>
    );
};

export default Navbar;




