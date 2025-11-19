// import { Link } from "react-router-dom";
// import { vector } from "../assets";
// import { popularBooks } from "../data/Book";

// const PopularCard = () => {
//   return (
//     <div className="main-container py-12 flex flex-col gap-9">
//       <h2 className="text-[#777777] text-2xl font-semibold text-center">
//         Popular Books
//       </h2>
//       <div className="grid grid-cols-4 gap-7  ">
//         {popularBooks.map((item, id) => (
//           <div
//             key={id}
//             className="bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-2xl overflow-hidden flex flex-col"
//           >
//             <div className="h-fit w-full">
//               <img src={item.image} className=" h-72  object-cover" />
//             </div>

//             <div className="p-5 flex flex-col justify-between h-full">
//               <div>
//                 <h1 className="text-[#f0582f]">{item.title}</h1>
//                 <p className="text-gray-500">{item.subheading}</p>
//                 <p className="text-justify text-[#b1b1b1] pt-2">
//                   {item.description}
//                 </p>
//               </div>
//               <div className="flex justify-between w-full mt-5 items-center">
//                 <div className="flex gap-1  items-center">
//                   <img src={vector} className="h-5 w-5 rounded-full" />
//                   <h1 className="text-gray-500 text-sm">{item.author}</h1>
//                 </div>
//                 <Link to={`/bookDetails/${item.id}`}>
//                   <div className="flex items-center pt-2">
//                     <button className="bg-[#f0582f]  px-2 py-1  cursor-pointer rounded-md text-white text-sm">
//                       View Details
//                     </button>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularCard;
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { vector } from "../assets";
import { popularBooks } from "../data/Book";

// Required CSS for react-slick
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PopularCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="main-container py-12 flex flex-col gap-9">
      <h2 className="text-[#777777] text-2xl font-semibold text-center">
        Popular Books
      </h2>

      <Slider {...settings}>
        {popularBooks.map((item, id) => (
          <div key={id} className="p-2">
            <div className="bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06)]  h-[500px] rounded-2xl overflow-hidden  flex flex-col">
              <img src={item.image} className="h-64  w-full object-cover" />
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h1 className="text-[#f0582f] font-semibold">{item.title}</h1>
                  <p className="text-gray-500">{item.subheading}</p>

                  <p className="text-justify text-sm text-[#b1b1b1] pt-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-between w-full mt-5 items-center">
                  <div className="flex gap-2 items-center">
                    <img src={vector} className="h-5 w-5 rounded-full" />
                    <h1 className="text-gray-500 text-sm">{item.author}</h1>
                  </div>

                  <Link to={`/bookDetails/${item.id}`}>
                    <button className="bg-[#f0582f] px-3 py-1 cursor-pointer rounded-md text-white text-sm">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularCard;
