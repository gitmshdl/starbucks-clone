import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Menu from "./pages/Menu";
import GiftCards from "./pages/GiftCards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import MenuDetail from "./components/MenuDetail";
import Previous from "./pages/Previous";
import Featured from "./pages/Featured";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu">
          <Route index element={<Menu />} />
          <Route path="featured" element={<Featured />} />
          <Route path="previous" element={<Previous />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path=":categoryId/:menuId" element={<MenuDetail />} />
          <Route path="*" element={<Menu />} />
        </Route>
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/giftcards" element={<GiftCards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
