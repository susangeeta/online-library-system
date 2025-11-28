import { Link } from "react-router-dom";
import { vector } from "../assets";

const PopularCard = ({ allBooks }) => {
  return (
    <div className="grid grid-cols-4 gap-7 main-container pb-16 ">
      {allBooks.map((book, id) => (
        <div
          key={id}
          className="flex flex-col border border-gray-300 rounded-md bg-white overflow-hidden"
        >
          <div className="relative">
            <img
              src={book.image}
              alt=""
              className="h-full object-cover w-full"
            />
            <button className="absolute top-3 rounded-md left-3 px-4 py-1 bg-white capitalize text-xs text-[#f0582f] border border-[#f0582f]">
              {book.category}
            </button>
          </div>
          <section className="p-3.5 flex justify-between w-full items-center">
            <div>
              <h1 className="text-[#282828] text-base font-bold whitespace-nowrap">
                {book.title}
              </h1>
              <div className="flex gap-1">
                <img src={vector} className="h-5 w-5 rounded-full" />
                <h2 className="text-[#282828] text-sm font-normal ml-1 ">
                  {book.author}
                </h2>
              </div>
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

export default PopularCard;
