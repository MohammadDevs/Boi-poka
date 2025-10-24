import React from 'react';

const ReadListCard = ({list}) => {
    console.log(list)
    const {bookName,image,author,tags,publisher,totalPages,category,rating} = list;
    return (
        <div className='flex gap-5 mb-5'>
        <div>
            <img className='max-w-[200px] h-[260px]' src={image} alt="" />
        </div>
        {/* second part */}
            <div className='w-full'>
                <h3 className='text-2xl font-semibold'>{bookName}</h3>
                <p className='my-3'>By: {author}</p>
                <span className='flex gap-4 my-3'>
                    {tags.map(tag=><button className='btn rounded-3xl bg-amber-50 text-green-500 hover:text-green-400'>#{tag}</button>)}
                </span>
                <span className='my-4 flex gap-4 border-b-2 pb-2 border-gray-200'>
                    <p>Publisher: {publisher}</p>
                    <p>Page {totalPages}</p>
                </span>
                <span className='flex gap-4 border-b-2 pb-4 border-gray-200'>
                    <p className='p-2 rounded-3xl text-blue-500 bg-blue-50'>Category: {category}</p>
                    <p className='p-2 rounded-3xl text-yellow-500 bg-amber-50'>Rating: {rating}</p>
                </span>
            </div>
        </div>
    );
};

export default ReadListCard;