import { Link } from "react-router-dom"
import Image from "./Image"

const Featurepost = () => {
  return (
    <div className={`mt-8 flex flex-col lg:flex-row gap-8`}>
      <div className={`w-full lg:w-1/2 flex flex-col gap-4`}>
        <Image src={`featured3.jpg`} className={`rounded-3xl object-cover`} />
        <div className={`flex items-center gap-4`}>
          <h1 className={`font-semibold lg:text-lg`}>01,</h1>
          <Link className={`text-blue-800 lg:text-lg`}>Web design</Link>
          <span className={`text-gry-500`}>2 days ago</span>
        </div>
        <Link to={`/test`} className={`text-xl lg:text-3xl font-semibold lg:font-bold`}>Lorem ipsum, dolor sit amet consectur.</Link>
        <div className={`w-full lg:w-1/2 flex flex-col gap-4`}>
          <div className={`lg:h-1/3 flex justify-between gap-4`}>
            <Image src={`featured2.jpg`} className={`rounded-3xl object-cover w-full h-full`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featurepost