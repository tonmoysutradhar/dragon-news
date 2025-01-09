import React from "react";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9 mb-5">
          <h2 className="font-semibold mb-5">Dragon News</h2>

          <div className="card bg-base-100 shadow-xl rounded-none">
            <figure className="p-6">
              <img src={news?.image_url} alt="News" />
            </figure>
            <div className="px-6">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="px-8 py-2 bg-[#D72050] my-5"
                >
                  Back to Category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNavbar></RightNavbar>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
