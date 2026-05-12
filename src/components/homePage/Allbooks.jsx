import React, { use } from 'react';

import BooksCard from '../Ui/BooksCard';
const booksPromise = fetch("/booksData.json").then(res => res.json())
const Allbooks = () => {
    const books = use(booksPromise)

    return (
        <div className='my-12 container mx-auto'>
            <h3 className='font-bold text-3xl text-center'>Books</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-20'>
                {
                    books.map((book, index) => {
                        return <BooksCard key={index} book={book}></BooksCard>
                    })
                }
            </div>

        </div>
    );
};

export default Allbooks;