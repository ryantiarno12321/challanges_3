import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TabelList from "./pages/TabelList";
import AddList from "./pages/AddList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/addlist" element={<AddList />} />
        <Route path="/" element={<TabelList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
