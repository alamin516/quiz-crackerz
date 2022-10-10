import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizzes';
const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div className='container mx-auto px-36 py-12'>
            <h1>Quizzes: {quizzes.data.length}</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-10'>
                {
                    quizzes.data.map(quiz => <Quizzes
                        key={quiz.id}
                        quiz={quiz}
                    ></Quizzes>)
                }
            </div>
        </div>
    );
};

export default Home;