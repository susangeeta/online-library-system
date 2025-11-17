const BrowseBooksHero = () => {
  return (
    <>
      <section className="bg-[url('https://skille.presstigers.dev/images/page-banners/inner-pages-banner.jpg')] bg-cover bg-center bg-no-repeat h-[250px] bg-[#f5f7fa] flex items-center justify-center ">
        <h1 className="text-4xl font-semibold">Browse Books</h1>
      </section>
      <div className=" main-container">
        <input
          type="text"
          className="border border-gray-300 w-96 p-2 focus:outline-none placeholder:text-sm rounded-md"
          placeholder="Search By Title Author....."
        ></input>
      </div>
    </>
  );
};

export default BrowseBooksHero;
