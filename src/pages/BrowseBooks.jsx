import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PopularCard from "../components/PopularCard";
import { popularBooks } from "../data/Book";

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.items);
  const [allBooks, setAllBooks] = useState(books);
  const [loading, setLoading] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    handelSearch();
  }, [books, searchValue, category]);

  //search books
  const handelSearch = () => {
    setLoading(true);

    let filtered = [...books, ...popularBooks];

    // 🔍 Search Filter
    if (searchValue.trim() !== "") {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.author.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // 📂 Category Filter
    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }

    setAllBooks(filtered);
    setLoading(false);
  };
  return (
    <div>
      <div className="bg-[url('https://skille.presstigers.dev/images/page-banners/inner-pages-banner.jpg')] bg-cover bg-center bg-no-repeat h-[150px]  md:h-[250px] bg-[#f5f7fa] flex items-center justify-center ">
        <h1 className=" text-2xl md:text-4xl font-semibold">Browse Books</h1>
      </div>
      <div className="py-10 flex flex-col gap-5">
        <div className=" main-container flex md:flex-row flex-col gap-5">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            className="border border-gray-300 w-74 md:w-96 p-2 focus:outline-none placeholder:text-sm rounded-md"
            placeholder="Search By Title Author....."
          ></input>

          <select
            className="border border-gray-300 p-2 rounded-md"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Non-Fiction">Non-fiction</option>
          </select>
        </div>
        {loading ? (
          <p className="text-center text-gray-500 mt-6 text-lg">
            {" "}
            Loading Books
          </p>
        ) : allBooks.length === 0 ? (
          <p className="text-center text-red-500 mt-6">No book found</p>
        ) : (
          <PopularCard allBooks={allBooks} />
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
