import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {

    const { data }  = useLoaderData();
    console.log(data);
    

    return (
        <div>
            data {data.length}
        </div>
    );
};

export default CategoryNews;