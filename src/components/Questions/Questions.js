import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import QuestionOptions from '../QuestionOptions/QuestionOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Questions = ({ questions }) => {
    const {question, options, correctAnswer} = questions;

    const rightAnswer = () => {
        toast.success(correctAnswer, {
            position: toast.POSITION.TOP_CENTER
        });
    };

    
    return (
        <div className='border-gray-100 border-2 mb-3 p-6'>
            <div className='flex justify-between'>
                <h2 className='text-2xl mb-5 w-11/12 text-center'>{question}</h2>
                <FontAwesomeIcon onClick={()=> rightAnswer()} className='mt-2' icon={faEye} />
                <ToastContainer />
            </div>
            <div className='grid grid-cols-2 gap-4 text-start'>
                {
                    options.map((option, idx )=> <QuestionOptions
                       key={idx}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></QuestionOptions>)
                }
            </div>
        </div>
    );
};

export default Questions;