import React, { use } from 'react';
const booksPromise = fetch("/booksData.json").then(res => res.json())
const Allbooks = () => {
    const books = use(booksPromise)
    console.log(books);

    return (
        <div className='my-12 container mx-auto'>
            <h3 className='font-bold text-3xl text-center'>Books</h3>

            {
                books.map(book => {
                    return <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={book.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <h2 className='font-bold text-xl'>{book.bookName}</h2>
                            </h2>
                            <p className='font-semibold text-lg'>{book.author}</p>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Allbooks;