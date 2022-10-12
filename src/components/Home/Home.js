import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizzes';
const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div className='md:px-32 md:py-12 px-3 mb-2'>
            <h1 className='md:text-4xl text-2xl font-extrabold my-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ff5051] to-blue-700'>Unlocking knowledge at the speed of thought.</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 md:pt-10 md:mt-16 mt-10'>
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