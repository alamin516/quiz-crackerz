import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div className='container mx-auto px-36 pt-12'>
            <h1>Quizzes: {quizzes.data.length}</h1>
            <div className='grid grid-cols-4 gap-4 pt-10'>
                {
                    quizzes.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;