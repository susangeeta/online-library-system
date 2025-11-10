import BookCard from "../components/BookCard";
import Header from "../components/Header";
import PopularBooks from "../components/PopularBooks";

const Home = () => {
  return (
    <div>
      <section className="main-container  bg-[url('https://eyecix.com/html/ereaders/extra-images/banner-1.jpg')] bg-cover bg-center bg-no-repeat  bg-black/75 bg-blend-overlay">
        <Header />

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
      <BookCard />
      <div className="border">
        <PopularBooks />
      </div>
    </div>
  );
};

export default Home;
