import React from 'react';
import { FaRegStar, FaRegStarHalf } from 'react-icons/fa';
import { Link } from 'react-router';
const BooksCard = ({book}) => {
    return (
        <div>
            <Link to={`/booksDetalis/${book.bookId}`} className="card bg-base-100  shadow-sm">
                <figure className='p-6 '>
                    <img
                        src={book.image}
                        alt={book.bookname}
                        className='rounded-md h-[270px] shadow-md ' />
                </figure>
                <div className="card-body">
                    <div className='items-center flex gap-5'>
                        {book.tags.map((tag, index) => (
                            <div className='badge text-green-500 font-bold bg-green-200' key={index}>{tag} </div>
                        ))}
                    </div>
                    <div className="card-title">
                        <h2 className='font-bold text-xl'>{book.bookName}</h2>
                    </div>

                    <p className='font-semibold text-lg '>{book.author}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                        <p className='font-semibold'>{book.category}</p>
                        <p className='font-semibold flex gap-2 items-center'>{book.rating} <FaRegStar></FaRegStar></p>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default BooksCard;