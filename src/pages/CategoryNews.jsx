import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const { data: news }  = useLoaderData();
    console.log(news);
    

    return (
        <div>
            <p>{news.length} News Found On This Category.</p>
            <div className='space-y-4'>
                {
                    news.map((singleNews) => (
                        <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;