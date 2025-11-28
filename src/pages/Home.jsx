import { useState } from "react";
import { useSelector } from "react-redux";
import PopularCard from "../components/PopularCard";
import { categories } from "../data/Book";

const Home = () => {
  const allBooks = useSelector((state) => state.books.items);
  const [category, setCategory] = useState("All");
  const filterBooks =
    category === "All"
      ? allBooks
      : allBooks.filter((book) => book.category === category);
  const popular = [...allBooks].sort((a, b) => b.rating - a.rating).slice(0, 4);
  return (
    <div>
      <section className="main-container h-[600px]  bg-[url('https://eyecix.com/html/ereaders/extra-images/banner-1.jpg')] bg-cover bg-center bg-no-repeat  bg-black/75 bg-blend-overlay">
        <section className="flex w-full items-center justify-center ">
          <div className="w-[60%] flex  flex-col gap-2 text-white justify-center">
            <h2 className="text-6xl font-bold">
              Welcome to the{" "}
              <span className="text-[#db5974] font-bold"> Library</span>
            </h2>
            <p className="text-4xl">Sales Up to 30%</p>
            <p className="mt-2 text-gray-300 ">
              Quisque ultricies luctus nisi non dapibus. Nullam efficitur lorem
              non libe blandit,
              <br /> non rhoncus libero tristique.
            </p>
          </div>
          <div className="w-[40%]">
            <img
              src="https://eyecix.com/html/ereaders/extra-images/banner-thumb.png"
              className="w-full object-contain h-[500px] "
            />
          </div>
        </section>
      </section>
      {/*categories section */}
      <div className="flex flex-col items-center justify-center pt-12 gap-6">
        <h2 className="text-[#777777] text-2xl font-semibold">
          Latest Categories
        </h2>
        <div className="flex gap-3 border border-[#dedede] w-fit rounded-full py-1 overflow-hidden items-center justify-center ">
          {categories.map((item) => (
            <div className="flex gap-3  overflow-hidden ">
              <button
                onClick={() => setCategory(item)}
                className={`text-[#282828] text-sm cursor-pointer  rounded-full w-32 py-2  px-2 ${
                  category === item
                    ? "bg-[#f0582f] text-white"
                    : "text-[#282828] bg-white"
                }`}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
      <PopularCard allBooks={filterBooks} />

      {/*popular books */}
      <div className="flex flex-col gap-5">
        {" "}
        <h2 className="text-[#777777] text-2xl font-semibold text-center">
          Popular Books
        </h2>
        <PopularCard allBooks={popular} />
      </div>
    </div>
  );
};

export default Home;
