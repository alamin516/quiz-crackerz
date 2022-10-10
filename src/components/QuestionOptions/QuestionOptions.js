import React from 'react';

const QuestionOptions = ({ option }) => {
    return (
        <div className='border-gray-100 border-2 flex items-center p-3'>
             <input className='w-6 h-6' type="radio"/> <label className='text-xl w-96 ml-2'>{option}</label>
        </div>
    );
};

export default QuestionOptions;