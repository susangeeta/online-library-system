import BooksMoreDetails from "../components/BooksMoreDetails";

const BookDetails = () => {
  return (
    <div>
      <section className="bg-[url('https://skille.presstigers.dev/images/page-banners/inner-pages-banner.jpg')] bg-cover bg-center bg-no-repeat h-[250px] bg-[#f5f7fa] flex items-center justify-center ">
        <h1 className="text-4xl font-semibold">Books Details</h1>
      </section>
      <BooksMoreDetails />
    </div>
  );
};

export default BookDetails;
