import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizzes';
const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div className='container mx-auto md:px-36 md:py-12 px-3'>
            <h1 className='text-2xl font-semibold mt-6'>Total Quizzes: {quizzes.data.length}</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 md:pt-10 md:mt-20 mt-10'>
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