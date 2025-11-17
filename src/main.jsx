import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AddBooks from "./pages/AddBooks.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import Home from "./pages/Home.jsx";

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <h1>Pages Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <BrowseBooks />,
      },

      {
        path: "/addBooks",
        element: <AddBooks />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}></RouterProvider>
);
