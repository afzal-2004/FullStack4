/* eslint-disable no-undef */
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";

import { createContext } from "react";

import { useState } from "react";
export const UserContext = createContext();
function App() {
  const [user, setuser] = useState();
  console.log("This is my user", user);

  return (
    <>
      <UserContext.Provider value={{ user, setuser }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
