import { FaArrowRightLong } from "react-icons/fa6";
import { popularBooks } from "../data/Book.js";
const PopularBooks = () => {
  return (
    <section className="main-container py-20 flex flex-col gap-7">
      <h1 className="flex justify-center text-[#282828] font-bold text-3xl ">
        Popular Books
      </h1>
      <div className="grid grid-cols-3 gap-7 w-full">
        {popularBooks.map((item, i) => (
          <div
            key={i}
            className="items-center flex flex-col gap-3 justify-center border border-gray-200 rounded-2xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <img src={item.image} className="h-36 w-42 object-cover" />
            <h1 className="text-base font-bold text-black text-center">
              {item.title}
            </h1>
            <p className="text-center text-sm">{item.des}</p>
            <div className="flex gap-3 items-center">
              <FaArrowRightLong />
              <div className="text-sm cursor-pointer">Read More</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PopularBooks;
