import React from 'react';
import { useLoaderData } from 'react-router';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const PageRead = () => {
    const data = useLoaderData();
    return (
        <div className='bg-red-50 rounded-xl my-6 p-2'>
            <BarChart width={1200} height={800} data={data}>
                <YAxis dataKey={"totalPages"}></YAxis>
                <XAxis dataKey={"bookName"} interval={0} angle={-75} textAnchor='end' height={280} dy={5} stroke='gray'></XAxis>
                <Bar dataKey={"totalPages"} fill='gray'></Bar>
            </BarChart>
        </div>
    );
};

export default PageRead;