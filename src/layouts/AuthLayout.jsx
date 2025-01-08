import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <section className='w-11/12 mx-auto'>
                <header className='pt-5'>
                    <Navbar></Navbar>
                </header>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AuthLayout;