import React from 'react';
import {Link} from 'react-router-dom';

const Quizzes = ({quiz}) => {
    const {id, logo, name} = quiz;
    return (
        <div className='border-l-gray-100 rounded-lg bg-clip bg-gradient-to-r from-[#ff5051] to-blue-700 px-2 pt-2'>
            <Link to={`quiz/${id}`}><img className='w-full' src={logo} alt="" /></Link>
            <div className='flex justify-between py-2 px-4 items-center border-top-2 border-white'>
                <h3 className='font-bold text-white'>{name}</h3>
                <button className='bg-[#ff5051] px-4 md:px-4 py-1 rounded-md text-white'>
                    <Link to={`quiz/${id}`}>Start Quiz</Link>
                </button>
            </div>
        </div>
    );
};

export default Quizzes;