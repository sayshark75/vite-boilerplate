import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import ROUTES from "./ROUTES";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {ROUTES.map((route) => (
          <Route path={route.path} element={<route.element />} key={route.path} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
