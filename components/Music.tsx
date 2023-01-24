import React from 'react';
import styles from '../styles/Music.module.css';

const Music = () => {
    return (
        <>
            <div className={`flex justify-center items-center h-screen ${styles.musicContainer} bg-cover h-96 bg-no-repeat`}>
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

            <div className={`cyan-bg py-10`}>
                <div className={`grid grid-cols-2 gap-4 container mx-auto pb-16`}>
                    <div>
                        <h2 className={`heading-2 white-text`}>Studio Journey</h2>
                        <p className={`text-1 dark-blue-text`}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum asperiores unde officia velit impedit! Eius quod quia explicabo animi!
                        </p>
                    </div>

                    <div className={`mx-auto`}>
                        <img
                            src="/studio.svg"
                            alt="studio picture"
                        />
                    </div>
                </div>

                <div className={`grid grid-flow-row-dense grid-cols-4 container mx-auto`}>
                    <div className={`col col-span-3`}>
                        <div className={`grid grid-cols-3 gap-4`}>
                            <div>00</div>
                            <div>00</div>
                            <div>00</div>
                        </div>
                    </div>

                    <div className={`col-span-1`}>
                        <p className={`text-1 dark-blue-text`}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum asperiores unde officia velit impedit! Eius quod quia explicabo animi!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Music;