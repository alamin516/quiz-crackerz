import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const Statistics = () => {
    const quizzes = useLoaderData();
    const { data } = quizzes;

    return (
        <div width="100%" height="100%">
            <BarChart
                width={900}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey='name' scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey='total' fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </div>
    );
};

export default Statistics;