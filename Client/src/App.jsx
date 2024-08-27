/* eslint-disable no-undef */
import axios from "axios";

import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";

import { createContext } from "react";

import { useState, useEffect } from "react";
import Dashboards from "./pages/Dashboard/Dashboards";
export const UserContext = createContext();
function App() {
  const [user, setuser] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/contact_manager/verify", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((result) => {
        console.log(result);
        if (result.data.success) {
          setuser(result.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log("This is my user", user);

  return (
    <>
      <UserContext.Provider value={{ user, setuser }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboards />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
