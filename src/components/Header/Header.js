import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='w-full md:px-32 flex justify-between border-b-2 shadow-md py-5 px-3'>
            <div className='md:w-6/12 w-10/12 text-left'>
                <Link to='/' className='md:text-3xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff5051] to-blue-700'>Programming Quiz</Link>
            </div>
            <div className='w-2/12'>
                <div onClick={() => setOpen(!open)} className="h-8 w-8 text-black-500 md:hidden" >
                    {
                        open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
                </div>
            </div>
            <div className={`item md:flex justify-center absolute md:static  duration-500 ${open ? 'top-12' : 'top-[-160px]'}`}>
                <Link className='text-xl mx-6 font-semi-bold' to="/">Home</Link>
                <Link className="text-xl mx-6 font-semi-bold" to="/statistics">Statistics</Link>
                <Link className='text-xl mx-6 font-semi-bold' to="/blog">Blog</Link>
            </div>

        </nav>
    );
};

export default Header;