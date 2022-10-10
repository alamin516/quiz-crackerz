import React from 'react';
import {Link} from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, logo, name} = quiz;
    return (
        <div className='quiz-container border-l-gray-100 bg-zinc-200 p-2'>
            <img src={logo} alt="" />
            <div className='flex justify-between pt-2 px-4'>
                <h3>{name}</h3>
                <button>
                    <Link to={`quiz/${id}`}>Start Quiz</Link>
                </button>
            </div>
        </div>
    );
};

export default Quiz;