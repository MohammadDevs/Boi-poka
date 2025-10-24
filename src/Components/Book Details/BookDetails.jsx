import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';


const BookDetails = () => {
    const bookId = useParams();
    const id = bookId.bookId;
    const idDetails = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book=>book.bookId === idDetails);
    const {tags,image,review,category,bookName,totalPages,publisher,yearOfPublishing,rating,author} = singleBook;
    
    const handelMarkAsRead = (id) => {
        // Store with Id
        //  Where to store
        //  array or collection
        //  if book already exist the show a alert
        //  if book not exist then push in the collection or array
        addToStoredDB(id);
    };

    return (
        <div className='grid grid-cols-2 gap-8 mb-8'>
            {/* Left Side */}
            <div className='bg-red-50 p-12 rounded-xl'>
                <img className='max-w-sm mx-auto max-h-[625px]' src={image} alt="" />
            </div>
            {/* Right Side */}
            <div className='mt-2'>
                <h2 className='text-5xl'>{bookName}</h2>
                <p className='my-4 text-xl border-b-2 border-dashed pb-2 border-red-50'>{author}</p>
                <p className='mb-5 text-xl border-b-2 border-dashed pb-2 border-red-50'>{category}</p>
                <p><span className='font-bold text-xl my-6'>Review:</span> {review}</p>
                <div className='flex gap-5 mt-4 border-b-2 border-dashed pb-4 border-red-50'>
                    <span className='text-xl font-bold '>Tag</span>
                    {
                        tags.map((tag,index)=><span key={index} className='mx-1 bg-amber-50 text-green-400 py-1 px-2 rounded-lg'>{tag}</span>)
                    }
                </div>
                    <div className='flex gap-13 mt-5'>
                        <div className=''>
                            <p>Number of Pages:</p>
                            <p className='my-1'>Publisher:</p>
                            <p className='mb-1'>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>

                        <div className='font-bold'>
                            <p>{totalPages}</p>
                            <p className='my-1'>{publisher}</p>
                            <p className='mb-1'>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <button onClick={()=> handelMarkAsRead(id)} className='btn mt-6'>
                            Read
                        </button>
                        
                        <button className='btn mt-6 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg'>
                            Wishlist
                        </button>
                    </div>
                    
            </div>
        </div>
    );
};

export default BookDetails;