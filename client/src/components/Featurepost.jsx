import { Link } from "react-router-dom"
import Image from "./Image"

const Featurepost = () => {
  return (
    <div className={`mt-8 flex flex-col lg:flex-row gap-8`}>
      <div className={`w-full lg:w-1/2 flex flex-col gap-4`}>
        <Image src={`featured3.jpg`} w={`895`} className={ `md:max-h-96 rounded-3xl object-cover`} />
        <div className={`flex items-center gap-4`}>
          <h1 className={`font-semibold lg:text-lg`}>01,</h1>
          <Link className={`text-blue-800 lg:text-lg`}>Web design</Link>
          <span className={`text-gry-500`}>2 days ago</span>
        </div>
        <Link to={`/test`} className={`text-xl lg:text-3xl font-semibold lg:font-bold`}>Lorem ipsum, dolor sit amet consectur.</Link>
        </div>
        
      <div className={`w-full lg:w-1/2 flex flex-col gap-4`}>
          <div className={`flex justify-between gap-4`}>
            <Image  src={`featured2.jpg`} className={`rounded-3xl object-cover w-1/3 aspect-video`} />
          
          <div className={`w-2/3`}>
          {/* Details */}
          <div className={`flex items-center gap-4 text-sm lg:text-base mb-4`}>
            <h1 className={`font-semibold`}>02.</h1>
            <Link to="" className={`text-blue-800`}>Web design</Link>
            <span className={`text-gray-500 text-sm`}>2 days ago</span>
          </div>
          {/* title */}
          <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium" to={`/test`}>Lorem ipsum acadabara</Link>
          </div>
          </div>
          {/*Second */}
          <div className={`flex justify-between gap-4`}>
            <Image src={`featured3.jpg`} className={`rounded-3xl object-cover w-1/3 aspect-video`} />
          
          <div className={`w-2/3`}>
          {/* Details */}
          <div className={`flex items-center gap-4 text-sm lg:text-base mb-4`}>
            <h1 className={`font-semibold`}>02.</h1>
            <Link to="" className={`text-blue-800`}>Web design</Link>
            <span className={`text-gray-500 text-sm`}>2 days ago</span>
          </div>
          {/* title */}
          <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium" to={`/test`}>Lorem ipsum acadabara</Link>
          </div>
          </div>

          {/*Third */}

          <div className={`flex justify-between gap-4`}>
            <Image src={`featured4.jpg`} className={`rounded-3xl object-cover w-1/3 aspect-video`} />
          
          <div className={`w-2/3`}>
          {/* Details */}
          <div className={`flex items-center gap-4 text-sm lg:text-base mb-4`}>
            <h1 className={`font-semibold`}>02.</h1>
            <Link to="" className={`text-blue-800`}>Web design</Link>
            <span className={`text-gray-500 text-sm`}>2 days ago</span>
          </div>
          {/* title */}
          <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium" to={`/test`}>Lorem ipsum acadabara</Link>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Featurepost