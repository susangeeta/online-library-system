import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BrowseBooksCard from "../components/BrowseBooksCard";
import { browseBooks } from "../data/Book";

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.list);
  const [allBooks, setAllBooks] = useState(books);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setAllBooks(books);
    setLoading(false);
  }, [books]);

  //search books
  const handelSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredBooks = browseBooks.filter(
      (item) =>
        item.title.toLowerCase().includes(value) ||
        item.author.toLowerCase().includes(value)
    );

    setAllBooks(filteredBooks);
    setLoading;
  };
  return (
    <div>
      <section className="bg-[url('https://skille.presstigers.dev/images/page-banners/inner-pages-banner.jpg')] bg-cover bg-center bg-no-repeat h-[250px] bg-[#f5f7fa] flex items-center justify-center ">
        <h1 className="text-4xl font-semibold">Browse Books</h1>
      </section>
      <div className=" main-container">
        <input
          type="text"
          onChange={handelSearch}
          className="border border-gray-300 w-96 p-2 focus:outline-none placeholder:text-sm rounded-md"
          placeholder="Search By Title Author....."
        ></input>
      </div>
      {loading ? (
        <p className="text-center text-gray-500 mt-6 text-lg"> Loading Books</p>
      ) : allBooks.length === 0 ? (
        <p className="text-center text-red-500 mt-6">No restaurant found</p>
      ) : (
        <BrowseBooksCard allBooks={allBooks} />
      )}
    </div>
  );
};

export default BrowseBooks;
