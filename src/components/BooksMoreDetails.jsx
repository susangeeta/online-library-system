import { FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BooksMoreDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.list);
  const book = books.find((item) => item.id === Number(id));
  console.log(book);
  console.log(books);

  return (
    <div className="main-container flex items-center justify-center py-12  ">
      <div className="flex  rounded-md w-[60%] bg-white border border-gray-300 overflow-hidden  ">
        <div className="">
          <img
            src={book.image}
            alt=""
            className="h-full object-cover w-[350px]"
          />
        </div>
        <div className="p-4 w-full">
          <div className="flex gap-4 items-center">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <button className="bg-yellow-400 rounded-full px-4 py-1 text-xs text-white">
              {book.category}
            </button>
          </div>
          <div className="pt-4 ">
            <h1 className="text-[#282828] text-xl font-bold whitespace-nowrap">
              {book.title}
            </h1>
            <section className="flex justify-between  pt-1   ">
              <div className="flex flex-col gap-1 ">
                <div className="text-[#717171] text-sm">Author:</div>
                <div className="text-[#282828] text-sm font-semibold">
                  {book.author}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[#717171] text-sm">ISBN:</div>
                <div className="text-[#282828] text-sm font-semibold">
                  8992886
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[#717171] text-sm">Publishing Date:</div>
                <div className="text-[#282828] text-sm font-semibold">
                  Nov 23, 2020
                </div>
              </div>
            </section>
            <div className="pt-3">
              <div className="w-full bg-gray-100  h-[1.5px]"></div>
            </div>
            <p className="text-sm text-justify leading-6 w-fit pt-4">
              {book.des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BooksMoreDetails;
