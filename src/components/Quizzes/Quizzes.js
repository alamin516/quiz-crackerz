import React from 'react';
import { Link } from 'react-router-dom';

const Quizzes = ({ quiz }) => {
    console.log(quiz)
    const { id, logo, name, total } = quiz;
    return (
        <div className='border-l-gray-100 rounded-lg bg-clip bg-gradient-to-r from-[#ff5051] to-blue-700 px-2 pt-2 shadow-lg'>
            <Link to={`quiz/${id}`}><img className='w-full' src={logo} alt="" /></Link>

            <div>
            <h3 className='text-2xl font-bold text-white'>{name}</h3>
            <div className='flex justify-between py-2 px-4 items-center border-top-2 border-white'>
                <h3 className='font-bold text-white'>Questions: {total}</h3>
                <button className='bg-[#ff5051] px-4 md:px-4 py-1 rounded-md text-white'>
                    <Link to={`quiz/${id}`}>Start Quiz</Link>
                </button>
            </div>
            </div>
        </div>
    );
};

export default Quizzes;