import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuestionOptions = ({ option, correctAnswer }) => {

    const answerC = () =>{
        if(correctAnswer === option){
                toast.success('Correct: ' + correctAnswer, {
                    position: toast.POSITION.TOP_CENTER
                });
        }else{
            toast.success('Incorrect Answer', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        
    }

    return (
        <div onClick={answerC} className='border-gray-100 border-2 flex items-center p-3'>
             <input className='w-6 h-6' type="radio"/> <label className='text-xl w-96 ml-2'>{option}</label>
             <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuestionOptions;