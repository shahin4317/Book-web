import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext()


const BookProvider = ({ children }) => {


    const [stroedBook, setStoredBook] = useState([])
    const [wishList, setWishList] = useState([])
    
    const handelMarkASRead = (currentbook) => {
        // step 1 : store book id or stroe book object 
        // step 2 : whare to store 
        // step 3 : array or Collection
        // step 4 : if the book is already axist then show alert and toast 
        // step 5 : if not then add the book in the array or collection


        const isExistBook = stroedBook.find((book)=> book.bookId === currentbook.bookId,)
        if (isExistBook) {
            toast.error('the book is exist')
        }
        else {
            setStoredBook([... stroedBook, currentbook])
            toast.success(`${currentbook.bookName}`)
        }
        console.log(currentbook, stroedBook,'book')



    }
        const handelWishList = (currentbook) => {
            const isExistInReadBook = stroedBook.find((book)=>book.bookId === currentbook.bookId )

            if(isExistInReadBook){
                toast.error('This book is aldready readList')
                return;
            }

        const isExistBook = wishList.find((book)=> book.bookId === currentbook.bookId,)
        if (isExistBook) {
            toast.error('the book is exist')
        }
        else {
            setWishList([... wishList, currentbook])
            toast.success(`${currentbook.bookName} is added to read list`)
        }
        console.log(currentbook, stroedBook,'book')

    }

    const data = {
        
        handelMarkASRead,stroedBook, setStoredBook,wishList,setWishList,handelWishList
    }



    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;