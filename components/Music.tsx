import React from 'react';
import styles from '../styles/Music.module.css';

const Music = () => {
    return (
        <div className={`${styles.musicContainer} bg-cover h-96 bg-no-repeat h-screen`}>
            <div className={`flex flex-col justify-center align-middle items-center`}>
                <h1 className={`heading-1 text-center blue-text`}>
                    MUSIC FOR LIVE
                </h1>

                <p className={`text-1 black-text text-center mb-0`}>
                    Lorem ipsum dolor sit amet consectetur
                </p>

                <p className={`text-1 black-text text-center mb-0`}>
                    adipisicing elit. Voluptatem qui
                </p>

                <p className={`text-1 black-text text-center`}>
                    aliquid porro ullam quod provident.
                </p>

                <div className={`text-center pt-4`}>
                    <button className={`blue-bg hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-full mr-4`}>
                        BUY
                    </button>

                    <button className={`blue-bg hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-full`}>
                        BOOK NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Music;