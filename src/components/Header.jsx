import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { libaryLogo } from "../assets";

const Header = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex main-container justify-between w-full gap-15 cursor-pointer bg-white rounded-md items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)">
      <div className="md:flex hidden">
        <img
          src={libaryLogo}
          className=" h-10 w-10 md:h-18 md:w-18 object-contain "
        />
      </div>
      <section className="md:hidden flex justify-between items-center w-full">
        <div className=" md:hidden">
          <img src={libaryLogo} className="h-10 w-10  object-contain " />
        </div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="text-2xl text-gray-700" />
          ) : (
            <HiMenu className="text-2xl text-gray-700" />
          )}
        </div>
      </section>
      {isOpen && (
        <div className="absolute top-12 right-0 w-full bg-white shadow-lg rounded-md flex flex-col gap-4 p-4 md:hidden z-50">
          <Link to="/">
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
          </Link>

          <Link to="/browse">
            {" "}
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
                Browse Books
              </h1>
            </div>
          </Link>

          <Link to="/addbooks">
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
          </Link>
        </div>
      )}

      <nav className=" hidden md:flex gap-8 text-sm font-semibold">
        <Link to="/">
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
        </Link>

        <Link to="/browse">
          {" "}
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
              Browse Books
            </h1>
          </div>
        </Link>

        <Link to="/addbooks">
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
        </Link>
      </nav>
    </div>
  );
};

export default Header;
