import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div className='md:w-7/12 mx-auto py-10'>
            <h1 className='md:text-4xl text-2xl mb-6 font-semibold'>{quiz.data.name} Quizzes</h1>
            <div>
                {
                    quiz.data.questions.map(question => <Questions 
                        key={question.id}
                        questions={question}
                    ></Questions>)
                }
            </div>
        </div>
    );
};

export default Quiz;