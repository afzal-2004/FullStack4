import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Register } from "./Components/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
