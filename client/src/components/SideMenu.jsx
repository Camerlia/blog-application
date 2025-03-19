// import React from 'react'
import { Link } from "react-router-dom";
import Search from "./Search";
const SideMenu = () => {
  return (
    <div className={`px-4 h-max sticky top-8`}>
      <h1 className={`mb-4 text-sm font-medium`}>Search</h1>
      <Search />
      <h1 className={`mt-8 text-sm font-medium`}>Filter</h1>
      <div className={`flex flex-col gap-2 text-sm`}>
        <label
          htmlFor={``}
          className={`flex items-center gap-2 cursor-pointer`}
        >
          <input
            type={`radio`}
            name={`sort`}
            value={`newest`}
            className={`appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer checked:bg-blue-800 rounded-sm`}
          />
          newest
        </label>
        <label
          htmlFor={``}
          className={`flex items-center gap-2 cursor-pointer`}
        >
          <input
            type={`radio`}
            name={`sort`}
            value={`popular`}
            className={`appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer checked:bg-blue-800 rounded-sm`}
          />
          Most Popular
        </label>
        <label
          htmlFor={``}
          className={`flex items-center gap-2 cursor-pointer`}
        >
          <input
            type={`radio`}
            name={`sort`}
            value={`trending`}
            className={`appearance-none bg-white  w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer checked:bg-blue-800 rounded-sm`}
          />
          Trending
        </label>
        <label
          htmlFor={``}
          className={`flex items-center gap-2 cursor-pointer`}
        >
          <input
            type={`radio`}
            name={`sort`}
            value={`oldest`}
            className={`appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer checked:bg-blue-800 rounded-sm`}
          />
          Oldest
        </label>
      </div>
      <h1 className={`mt-8 text-sm font-medium`}>Category</h1>
      <div className={`flex flex-col gap-2 text-sm`}>
        <Link to="/posts" className={`underline`}>
          All
        </Link>
        <Link to="/posts?cat=web-design" className={`underline`}>
          Web Design
        </Link>
        <Link to="/posts?cat=development" className={`underline`}>
          Development
        </Link>
        <Link to="/posts?cat=database" className={`underline`}>
          Database
        </Link>
        <Link to="/posts?cat=seo" className={`underline`}>
          Search Engines
        </Link>
        <Link to="/posts?cat=marketing" className={`underline`}>
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
