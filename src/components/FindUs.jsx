import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='mb-4 font-semibold'>Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100 *:justify-start">
                <button className="btn join-item ">
                   <FaFacebookF className='text-[#3B599C]'></FaFacebookF> Facebook
                </button>
                <button className="btn join-item">
                    <FaTwitter className='text-[#58A7DE]'></FaTwitter> Twitter
                </button>
                <button className="btn join-item">
                    <FaInstagram className='text-[#D82D7E]'></FaInstagram> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;