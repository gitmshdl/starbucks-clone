import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Menu from "./pages/Menu";
import GiftCards from "./pages/GiftCards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/rewards" element={<Rewards />} />
        <Route exact path="/giftcards" element={<GiftCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
