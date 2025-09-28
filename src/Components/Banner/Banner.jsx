import React from 'react';
import bookImage from '../../assets/book.png';
const Banner = () => {
    return (
        <div className='flex justify-around items-center bg-red-50 rounded-2xl px-4 md:px-14'>
            <div className='md:ml-7'>
                <p className='text-xl md:text-5xl font-bold'>Books to freshen up your bookshelf</p>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div className='w-full'>
                <img className='md:max-w-sm' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;