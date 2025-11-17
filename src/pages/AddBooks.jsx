const AddBooks = () => {
  return (
    <div className="py-12 main-container w-[50%]">
      <form className="bg-white  shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 flex flex-col gap-4 ">
        <h1 className="text-center text-[#f0582f] text-2xl">Add New Book</h1>
        <div className="flex  flex-col gap-1">
          <h1>Book Title</h1>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-0"
            placeholder="Book Title"
            required
          />
        </div>
        <div className="flex  flex-col gap-1">
          <h1>Author Name</h1>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-0"
            placeholder="Author Name"
            required
          />
        </div>{" "}
        <div className="flex  flex-col gap-1">
          <h1>Action</h1>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-0"
            placeholder="Action"
            required
          />
        </div>{" "}
        <div className="flex  flex-col gap-1">
          <h1>Rating</h1>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-0"
            placeholder="Rating"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Image URL</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-0"
            placeholder="Paste image URL"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Description</label>
          <textarea
            name=""
            className="border border-gray-300 focus:outline-none focus:ring-0  h-32  px-1 py-1"
            placeholder="Description....."
          ></textarea>
        </div>
        <button
          className="bg-[#f0582f] px-3 py-2 rounded-md text-white cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
