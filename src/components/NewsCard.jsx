import React from "react";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);

  return (
    <div className="card bg-white shadow-lg rounded-lg p-4">
      {/* Author Info */}
      <div className="flex items-center mb-4">
        <img
          src={singleNews.author.img}
          alt={singleNews.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="font-semibold text-sm">{singleNews.author.name}</p>
          <p className="text-gray-500 text-xs">
            {new Date(singleNews.author.published_date).toDateString()}
          </p>
        </div>
        <div className="ml-auto flex gap-2">
          <FaRegBookmark className="text-gray-500 cursor-pointer" />
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Article Image */}
      <img
        src={singleNews.image_url}
        alt={singleNews.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Article Content */}
      <h2 className="text-lg font-semibold mb-2">{singleNews.title}</h2>
      <p className="text-gray-500 text-sm mb-4">
        {singleNews.details.slice(0, 100)}...
        <Link to={`/news/${singleNews._id}`} className="text-blue-500 cursor-pointer"> Read More</Link>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-orange-500">
          <span className="font-bold">{singleNews.rating.number}</span>
          <span className="ml-1 text-sm">{singleNews.rating.badge}</span>
        </div>
        <div className="text-gray-500 text-sm flex items-center">
          <span className="mr-1">{singleNews.total_view}</span>
          <span>views</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

