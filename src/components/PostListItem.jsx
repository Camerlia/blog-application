import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className={`flex flex-col xl:flex-row gap-8 `}>
      <div className={`md:hidden xl:block xl:w-1/3`}>
        <Image src={`postImg.jpg`} w={`735`} className={`rounded-2xl object-contain`} />
      </div>
      <div className={`flex flex-col gap-4 xl:w-2/3`}>
        <Link to={`/test`} className={`text-4xl font-semibold`}>
          Lorem isum ijhkn jdduf dsnmc,none
        </Link>
        <div className={`flex items-center gap-2 text-gray-400 text-sm`}>
          <span> Written by </span>
          <Link className={`text-blue-800`}>John Doe</Link>
          <span>on</span>
          <Link className={`text-blue-800`}>Web design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link className={`underline text-blue-800 text-sm`}>Read more</Link>
      </div>
    </div>
  );
};

export default PostListItem;
