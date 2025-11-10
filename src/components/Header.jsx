import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex gap-3 px-6 py-3 bg-white rounded-md">
      <section className="flex justify-between w-full">
        <div className="flex items-center gap-15 cursor-pointer">
          <div>
            <img
              src="./library-logo.jpg"
              className="h-12 rounded-full w-12 object-contain "
            />
          </div>

          <nav className="flex gap-8 text-sm font-semibold">
            <div
              onClick={() => setMenu("home")}
              className="flex items-center gap-1.5"
            >
              <div
                className={`${
                  menu === "home" ? "bg-[#db5974]" : "bg-black"
                } h-1 w-1 rounded-full `}
              ></div>
              <h1
                className={`${
                  menu === "home" ? "text-pink-600" : "text-gray-500"
                }`}
              >
                Home
              </h1>
            </div>
            <div
              onClick={() => setMenu("browse")}
              className="flex items-center gap-1.5"
            >
              <div
                className={`${
                  menu === "browse" ? "bg-[#db5974]" : "bg-black"
                } h-1 w-1 rounded-full `}
              ></div>
              <h1
                className={`${
                  menu === "browse" ? "text-pink-600" : "text-gray-500"
                }`}
              >
                Add Browse
              </h1>
            </div>
            <div
              onClick={() => setMenu("book")}
              className="flex items-center gap-1.5"
            >
              <div
                className={`${
                  menu === "book" ? "bg-[#db5974]" : "bg-black"
                } h-1 w-1 rounded-full `}
              ></div>
              <h1
                className={`${
                  menu === "book" ? "text-pink-600" : "text-gray-500"
                }`}
              >
                Add Book
              </h1>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-7">
          <div className="relative overflow-hidden ">
            <input
              type="text"
              className="border-2 border-[#efefef] p-2 focus:outline-none w-72 placeholder:text-[#b3b3b3] rounded-md bg-[#f8f8f8]  "
              placeholder="Search...."
            />
            <IoSearch className="top-4 absolute right-4 text-[#c2c1c4] text-xl" />
          </div>
          <div className="relative">
            <div className="border-2 border-[#efefef] px-3 rounded-md py-2 text-[#c4c2c9]">
              <MdOutlineShoppingCart className="text-2xl " />
            </div>
            <div className="rounded-full bg-red-700 h-5 w-5 absolute -top-2 -right-1 flex items-center justify-center">
              <h1 className="text-white  text-xs  ">1</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
