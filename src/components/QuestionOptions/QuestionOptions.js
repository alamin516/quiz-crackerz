import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuestionOptions = ({ option, correctAnswer, question }) => {


    const answerC = () => {
        if (correctAnswer === option) {
            toast.success('Correct', {
                position: toast.POSITION.TOP_CENTER
            })
        } else {
            toast.success('Incorrect', {
                position: toast.POSITION.TOP_CENTER
            });
        }

    }

    return (
        <div className="flex items-center md:w-full border-gray-100 border-2 rounded-md ">
            <label onClick={()=> answerC()} className='flex w-full items-center md:text-xl p-3 hover:bg-blue-100 transition-all duration-500  cursor-pointer'><input className='w-16 h-6 mr-2' type="radio" name={question} /> <p className='w-10/12'>{option}</p></label>
            <ToastContainer/>
        </div>
    );
};

export default QuestionOptions;