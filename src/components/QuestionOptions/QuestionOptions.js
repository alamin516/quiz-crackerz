import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuestionOptions = ({ option, correctAnswer, question }) => {

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
        <div onClick={answerC}>
              <label className='flex items-center md:text-xl md:w-full border-gray-100 border-2 rounded-md p-3'><input className='w-6 h-6 mr-2' type="radio" name={question}/> {option}</label>
             <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuestionOptions;