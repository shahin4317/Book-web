import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const ListedReadList = () => {
    const { stroedBook, wishList } = useContext(BookContext)
    console.log("book", stroedBook, wishList)
    return (
        <div>
            readlist
            {
                stroedBook.map(book => <h2>{book.bookName}</h2>)
            }
        </div>
    );
};

export default ListedReadList;