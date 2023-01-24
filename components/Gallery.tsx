import React from 'react';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
    return (
        <div className={`blue-bg py-10`}>
            <div className={`container mx-auto`}>
                <h2 className={`heading-2 text-white`}>Gallery</h2>

                <div className={`grid grid-rows-3 grid-flow-col gap-4`}>
                    <div className={`row-span-3 bg-red-400`}>01</div>
                    <div className={`col-span-2 bg-red-400`}>02</div>
                    <div className={`row-span-2 col-span-2 bg-red-400`}>03</div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;