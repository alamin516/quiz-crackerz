import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex border-b-2 shadow-sm px-36 py-5'>
            <div className='w-6/12 text-left'>
                <h1 className='text-3xl font-bold text-[#1da1f2]'>Programming Quiz</h1>
            </div>
            <div className='w-6/12 text-right'>
                <Link className='text-2xl mx-6 font-bold' to="/">Topics</Link>
                <Link className='text-2xl mx-6 font-bold' to="/statistic">Statistic</Link>
                <Link className='text-2xl mx-6 font-bold' to="/blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Header;