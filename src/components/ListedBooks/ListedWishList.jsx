import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { HiH3 } from 'react-icons/hi2';

const ListedWishList = () => {
    const { wishList } = useContext(BookContext)
    console.log("book",wishList)
    if(wishList.length === 0){
        return('No data found')
    }
    return (
        <div>
            wishlist
            {
                wishList.map(book=> <h2>{book.bookName}</h2>)
            }
        </div>
    );
};

export default ListedWishList;