import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-[#F3F3F3] p-3'>
            <p className='text-white px-4 py-2 bg-[#D72050]'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10 '>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laudantium!</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laudantium!</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laudantium!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;