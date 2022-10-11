import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHamburger } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        // <nav className='w=full px-36 flex border-b-2 shadow-md py-5 '>
        //     <div className='w-6/12 text-left'>
        //         <Link to='/' className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1da1f2] to-blue-600'>Programming Quiz</Link>
        //     </div>
        //     <div className='w-6/12 text-right'>
        //         <Link className='text-2xl mx-6 font-bold' to="/">Home</Link>
        //         <Link className='text-2xl mx-6 font-bold' to="/statistics">Statistics</Link>
        //         <Link className='text-2xl mx-6 font-bold' to="/blog">Blog</Link>
        //     </div>
        // </nav>
        <nav className='w=full px-36 flex border-b-2 shadow-md py-5'>
            <div className='w-6/12 text-left'>
                <Link to='/' className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1da1f2] to-blue-600'>Programming Quiz</Link>
            </div>
            <div className={`md:flex justify-center absolute md:static  duration-500 ${open ? 'top-8' : 'top-[-120px]'}`}>
                <Link className='text-2xl mx-6 font-bold' to="/">Home</Link>
                <Link className='text-2xl mx-6 font-bold' to="/statistics">Statistics</Link>
                <Link className='text-2xl mx-6 font-bold' to="/blog">Blog</Link>
                <div onClick={() => setOpen(!open)} className="h-8 w-8 text-black-500 md:hidden ml-5" >
                    {
                        open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;