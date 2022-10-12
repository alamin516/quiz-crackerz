import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {LineChart, YAxis, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';
import './Statistic.css'


const Statistics = () => {
    const quizzes = useLoaderData();
    console.log(quizzes);
    const { data } = quizzes;

    return (
        <div className="md:w-11/12 mx-auto my-8">
            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line connectNulls type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;