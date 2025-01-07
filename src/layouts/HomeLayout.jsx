import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-component/LeftNavbar';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='py-5'>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12 gap-4'>
                <aside className='col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>
                    main content
                </section>
                <aside className='col-span-3'>
                    right
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;