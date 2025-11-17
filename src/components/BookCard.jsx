import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { categories, categoriesBooks } from "../data/Book.js";

const BookCard = () => {
  const [categorySelect, setCategorySelect] = useState("All");
  console.log(categorySelect);

  const filterCategories =
    categorySelect === "All"
      ? categoriesBooks
      : categoriesBooks.filter((item) => item.category === categorySelect);

  return (
    <div className="main-container bg-[url('https://skille.presstigers.dev/images/filter-bg.png')]  bg-cover bg-center flex flex-col pt-16 gap-12 bg-[#f5f7f] bg-fixed">
      <div className="flex items-center justify-center flex-col gap-5">
        <h4 className="text-gray-500 font-bold">Categories Collections</h4>
        <h1 className="text-[#282828] font-bold text-5xl text-center">
          Checkout New Releases <br /> Of Books, Audios and Videos
        </h1>
      </div>

      <div className="flex flex-col gap-5 items-center ">
        <div className="flex gap-2 px-1 py-2 items-center justify-center  rounded-full border border-gray-300">
          {categories.map((item, i) => (
            <div
              key={i}
              className="flex flex-row items-center  justify-center "
            >
              <button
                onClick={() => setCategorySelect(item)}
                className={` px-3 py-2 w-32 rounded-full text-sm cursor-pointer ${
                  categorySelect === item
                    ? "bg-[#f0582f] text-white border-pink-600"
                    : "bg-white text-gray-700 border-pink-600 hover:bg-orange-50"
                }`}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-7 ">
          {filterCategories.map((item, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70  opacity-0 group-hover:opacity-100 transition-opacity duration-500  flex flex-col justify-center items-center text-center  text-white p-6 gap-1.5">
                <p className="font-semibold text-base">
                  Author:{" "}
                  <span className="font-normal text-sm">{item.author}</span>
                </p>
                <h2 className="text-3xl font-semibold">{item.title}</h2>
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <IoMdStarOutline key={i} className="text-white" />
                  ))}
                </div>

                <p className="text-sm">{item.description}</p>
                <div className="flex items-center gap-2">
                  <h1>View Details</h1>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
