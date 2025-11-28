import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex main-container justify-between w-full gap-15 cursor-pointer bg-white rounded-md items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)">
      <div>
        <img
          src="./library-logo.jpg"
          className="h-12 rounded-full w-12 object-contain "
        />
      </div>

      <nav className="flex gap-8 text-sm font-semibold">
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
