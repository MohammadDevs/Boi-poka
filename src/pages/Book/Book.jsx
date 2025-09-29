import React from 'react';

const Book = ({singleBook}) => {
    console.log(singleBook)

    const {bookName,author,image,tags,category,rating} = singleBook;
    return (
        <div className="card bg-base-100 w-[360px] shadow-sm mx-auto mt-8">
  <figure className='bg-red-50 rounded-lg m-3 p-2'>
    <img
    className='h-[175px] p-2 drop-shadow-sm bg-gray-50 rounded-lg'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-3'>
      {
        tags.map((tag,index)=><span key={index} className='mx-1 bg-amber-50 text-green-400 py-1 px-2 rounded-lg'>{tag}</span>)
      }
    </div>
    <h2 className="card-title">
      {bookName}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <h4 className='border-b-2 border-dashed pb-1 border-red-50'>By: {author}</h4>
    <div className="card-actions justify-between">
      <div className="text-sm">{category}</div>
      <div className="text-sm">{rating}</div>
    </div>
  </div>
</div>
    );
};

export default Book;