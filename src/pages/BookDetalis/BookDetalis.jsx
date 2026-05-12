
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetalis = () => {
    const { bookId: bookParamsId } = useParams();
    console.log(typeof bookParamsId)

    const books = useLoaderData()
    console.log(books)
    const expectedBooks = books.find((book) => book.bookId === Number(bookParamsId));
    const {
        image,
        bookName,
        author,
        review,
        totalPages,
        category,
        tags,
        publisher,
        yearOfPublishing } = expectedBooks
    return (
        <div className="grid lg:grid-cols-2 bg-base-100 shadow-sm m-10 md:m-20 lg:m-40">
            <figure className='w-full flex items-center justify-center bg-gray-100 rounded-md'>
                <img
                    src={image}
                    alt='Album'
                    className='h-[500px] p-7'
                />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold">{bookName}</h2>
                <h2 className='font-semibold'>{author}</h2>
                <p className='py-2 border-y'>{category}</p>
                <p> <span className='font-semibold'>Review:</span> <span>{review}</span></p>
                <div className='items-center flex gap-5'>
                    {tags.map((tag, index) => (
                        <div className='badge text-green-500 font-bold bg-green-200' key={index}>{tag} </div>
                    ))}
                </div>
                <div className='border-t space-y-3'>
                    <div className='flex justify-between items-center gap-2'>
                        <span >Number of pages: <span className='font-semibold'>{totalPages}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>publisher: <span className='font-semibold'>{publisher}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>YearOfPublishing: <span className='font-semibold'>{yearOfPublishing}</span></span>
                    </div>
                </div>
                <div className="card-actions justify-between">
                    <button className='btn '>Marks as Read</button>
                    <button className="btn btn-success">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetalis;