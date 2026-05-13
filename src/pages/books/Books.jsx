import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';
const Books = () => {

    const { stroedBook, wishList } = useContext(BookContext)
    console.log("book", stroedBook, wishList)
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center my-5'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Short by⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Pages</a></li>
                        <li><a>Rating</a></li>
                    </ul>
                </div>
            </div>



            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;