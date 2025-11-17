import { Link } from "react-router-dom";
import { browseBooks } from "../data/Book";

const BrowseBooksCard = () => {
  return (
    <div className="grid grid-cols-4 gap-7 main-container pb-16 ">
      {browseBooks.map((book, id) => (
        <div
          key={id}
          className="flex flex-col border border-gray-300 rounded-md bg-white p-"
        >
          <img src={book.image} alt="" className="h-full object-cover w-full" />
          <section className="p-3.5 flex justify-between w-full items-center">
            <div>
              <h1 className="text-[#282828] text-base font-bold whitespace-nowrap">
                {book.title}
              </h1>
              <h2 className="text-[#717171] text-sm">
                Author:
                <span className="text-[#282828] text-sm font-normal ml-1 ">
                  {book.author}
                </span>
              </h2>
            </div>
            <div>
              <Link to={`/bookDetails/${book.id}`}>
                <button className="border boreder-[#f0582f] px-3 py-1 text-[#f0582f] rounded-md cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default BrowseBooksCard;
