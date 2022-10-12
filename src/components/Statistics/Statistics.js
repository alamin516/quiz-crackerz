import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';



const Statistics = () => {
    const quizzes = useLoaderData();
    const { data } = quizzes;

    return (
        <div>
            <ResponsiveContainer>
            <BarChart
                width={900}
                height={500}
                data={data}
                barSize={20}
             style={{margin: '30px auto'}}>
                <XAxis dataKey='name' scale="point" padding={{ left: 15, right: 15 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey='total' fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;