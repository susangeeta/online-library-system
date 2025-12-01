import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import store from "./utils/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Toaster position="top-center" />
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
