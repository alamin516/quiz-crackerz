import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <h1>{quiz.data.name}</h1>
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