import React from 'react';
import QuestionOptions from '../QuestionOptions/QuestionOptions';

const Questions = ({questions}) => {
    const {id, question, options} = questions;
     return (
        <div className='border-1'>
            <h2>{question}</h2>
            {
                options.map(option => <QuestionOptions 
                    option={option}
                ></QuestionOptions>)
            }
        </div>
    );
};

export default Questions;