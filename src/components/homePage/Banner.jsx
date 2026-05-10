import React from 'react';
import booksimg from '../../assets/pngwing_1-removebg-preview.png'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={booksimg}
                        className="max-w-sm rounded-lg  "
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        
                        <button className="btn btn-success mt-5">veiw the list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;