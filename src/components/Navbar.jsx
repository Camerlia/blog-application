import { IKImage } from 'imagekitio-react';
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`py-4 w-full h-16 md:h-20 flex items-center justify-between`}
    >
      <div className={`flex gap-2 items-center`}>
        <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}  path="/logo.png" alt="blog logo" className={`w-10 `} />
        <span className={`2xl font-bold`}>Blog</span>
      </div>
      {/* Mobile screen*/}
      <div className={`md:hidden`}>
        <div
          className={` cursor-pointer text-2xl`}
          onClick={() => setOpen(!open)}
        >
          {open ? "X" : <img src="/menu.png" alt="menu" className="w-6" />}
        </div>
        <div
          className={`h-screen w-full flex flex-col gap-4 justify-center transition-all ease-in-out items-center absolute gp-8 font-medium  text-lg top-16 bg-blue-100 
          ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href={`/`}>Home</a>
          <a href={`/`}>Trending</a>
          <a href={`/`}>Most Popular</a>
          <a href={`/`}>About</a>
          <a href={``}>
            <button className={` py-2 px-4 rounded-3xl bg-blue-600 text-white`}>
              Login
            </button>
          </a>
        </div>
      </div>

      {/*Desktop screen*/}
      <div
        className={`hidden md:flex gap-8 items-center xl:gap-12 font meduim`}
      >
        <a href={`/`}>Home</a>
        <a href={`/`}>Trending</a>
        <a href={`/`}>Most Popular</a>
        <a href={`/`}>About</a>
        <a href={``}>
          <button className={` py-2 px-4 rounded-3xl bg-blue-600 text-white`}>
            Login
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
