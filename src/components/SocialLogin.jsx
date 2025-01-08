import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='mb-5 font-semibold'>Login With</h2>
            <div className='*:w-full space-y-1'>
                <button className='btn'>
                    <FaGoogle></FaGoogle> Login with Google
                </button>
                <button className='btn'>
                    <FaGithub></FaGithub> Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;