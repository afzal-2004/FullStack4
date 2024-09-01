/* eslint-disable no-undef */
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext } from "react";

import { useState, useEffect } from "react";
import { Router } from "./router";

export const UserContext = createContext();
function App() {
  const [user, setuser] = useState("");
  const [Indecator, setIndecator] = useState(1);
  const [Currentid, setCurrentid] = useState(null);
  console.log("Current product  id is :", Currentid);
  useEffect(() => {
    setIndecator(1);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3002/contact_manager/verify", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((result) => {
        // console.log(result);
        if (result.data.success) {
          setuser(result.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const value = {
    user,
    setuser,
    Indecator,
    setIndecator,
    Currentid,
    setCurrentid,
  };
  // console.log("This is my user", user);

  return (
    <>
      <UserContext.Provider value={value}>
        <ToastContainer />
        <Router />
      </UserContext.Provider>
    </>
  );
}

export default App;
