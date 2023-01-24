import React from 'react';
import styles from '../styles/Video.module.css';

const Video = () => {
    return (
        <div className={`cyan-bg py-10`}>
            <div className={`container mx-auto`}>
                <h2 className={`heading-2 text-white text-center`}>Video</h2>

                <div className={`grid grid-cols-3 gap-4`}>
                    <div className={`bg-red-400`}>01</div>
                    <div className={`bg-red-400`}>02</div>
                    <div className={`bg-red-400`}>03</div>
                </div>
            </div>
        </div>
    );
};

export default Video;