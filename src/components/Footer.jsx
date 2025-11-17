import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { RiGoogleLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111111] py-16 flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-3  p-3">
          <div className="rounded-full h-12 w-12 cursor-pointer bg-white flex items-center justify-center">
            <FaFacebook className=" text-3xl" />
          </div>
          <div className="rounded-full h-12 w-12 bg-white  cursor-pointer flex items-center justify-center">
            <FaInstagram className=" text-3xl" />
          </div>
          <div className="rounded-full h-12 w-12 bg-white  cursor-pointer flex items-center justify-center">
            <LuTwitter className=" text-3xl" />
          </div>
          <div className="rounded-full h-12 w-12 bg-white  cursor-pointer flex items-center justify-center">
            <RiGoogleLine className=" text-3xl" />
          </div>
          <div className="rounded-full h-12 w-12 bg-white  cursor-pointer flex items-center justify-center">
            <AiOutlineYoutube className=" text-3xl" />
          </div>
        </div>
        <div className="flex gap-5 cursor-pointer text-white">
          <h2>Home</h2>
          <h2>Brwose Books</h2>
          <h2>Add Books</h2>
        </div>
      </footer>
      <div className="bg-gray-950 py-6 flex items-center justify-center ">
        <h1 className="text-white">
          Designed and Developed By{" "}
          <span className="text-yellow-300">Sangeeta</span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
