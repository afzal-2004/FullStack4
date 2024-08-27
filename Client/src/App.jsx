/* eslint-disable no-undef */
import axios from "axios";

import { createContext } from "react";

import { useState, useEffect } from "react";
import { Router } from "./router";

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
        <Router />
      </UserContext.Provider>
    </>
  );
}

export default App;
