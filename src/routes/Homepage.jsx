//import React from 'react'
import { Link } from 'react-router-dom'
import MainCategory from '../components/MainCategory'
import Featurepost from "../components/Featurepost"

const Homepage = () => {
  return (
    <div className={`mt-4 flex flex-col gap-4`}>
      <div className={`flex gap-4`}>
        <Link to='/'>Home</Link>
        <span>+</span>
        <span className={`text-blue-800`}>Blog and Articles</span>
      </div>
      <div className={`flex items-center justify-between`}>
        <div className={``}>
          <h1 className={`text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold`}>Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
          <p className={`mt-8 text-base md:text-4xl`}> textttttttttttttttttt</p>
        </div>
        <Link to={`write`} className={`hidden md:block relative`}>
          <svg
          viewBox={`0 0 200 200`}
          width={`200`}
          height={`200`}
          className={`text-lg tracking-widest animate-spin animatedButton`}
          >
            <path 
              id={`circlePath`}
              fill={`none`}
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
            />
            <text>
            <textPath startOffset={`0%`} href={`#circlePath`}> Write your story</textPath>
            <textPath startOffset={`50%`} href={`#circlePath`}> Write your Idea</textPath>
            </text>
          </svg>
          <button className={`absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center`}>
            <svg
            xmlns={`http://www.w3.org/2000/svg`}
            viewBox={`0 0 24 24`}
            width={`50`}
            height={`50`}
            fill={`none`}
            stroke={`white`}
            strokeWidth={`2`}
            ></svg>
          </button>
        </Link>
      </div>
      <MainCategory />
      <Featurepost />
    </div>
  )
}

export default Homepage
