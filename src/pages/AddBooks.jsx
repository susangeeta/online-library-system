import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/booksSlice";

const AddBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [des, setDes] = useState("");
  const [action, setAction] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib";

  const validate = () => {
    if (!title || !author || !des || !action || !rating || !des) {
      toast.error("Please fill all the field");
      return false;
    }
    return true;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const newBook = {
      id: Date.now(),
      title,
      author,
      action,
      rating,
      category,
      description: des,

      image: image.trim() === "" ? DEFAULT_IMAGE : image,
    };
    console.log(newBook);
    dispatch(addBook(newBook));
    toast.success("Book added successfully!");
    setTimeout(() => navigate("/browse"), 800);
  };
  return (
    <div className="py-12 main-container w-full  md:w-[50%]">
      <form
        onSubmit={handelSubmit}
        className="bg-white  shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 flex flex-col gap-4 "
      >
        <h1 className="text-center text-[#f0582f] text-2xl">Add New Book</h1>
        <div className="flex md:flex-row flex-col  gap-3">
          <div className="flex  flex-col gap-1 w-full ">
            <h1>Book Title</h1>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-0"
              placeholder="Book Title"
              required
            />
          </div>
          <div className="flex  flex-col gap-1 w-full">
            <h1>Author Name</h1>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-0"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col  gap-3">
          <div className="flex  flex-col gap-1 w-full">
            <h1>Action</h1>
            <input
              type="text"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-0"
              placeholder="Action"
              required
            />
          </div>
          <div className="flex  flex-col gap-1 w-full">
            <h1>Rating</h1>
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-0"
              placeholder="Rating"
              required
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col  gap-3">
          <div className="flex  flex-col gap-1 w-full">
            <h1>Catgory</h1>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="Fiction">Fiction</option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="Self-Help">Self-Help</option>
              <option value="Cooking">Cooking</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="font-semibold">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-0"
              placeholder="Paste image URL"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Description</label>
          <textarea
            value={des}
            name=""
            onChange={(e) => setDes(e.target.value)}
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
