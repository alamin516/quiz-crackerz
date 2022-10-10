import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='container mx-auto px-36 flex border-b-2 shadow-sm py-5'>
            <div className='w-6/12 text-left'>
                <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1da1f2] to-blue-600'>Programming Quiz</h1>
            </div>
            <div className='w-6/12 text-right'>
                <Link className='text-2xl mx-6 font-bold' to="/">Topics</Link>
                <Link className='text-2xl mx-6 font-bold' to="/statistics">Statistics</Link>
                <Link className='text-2xl mx-6 font-bold' to="/blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Header;