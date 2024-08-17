import { useState } from "react";
import "./Components.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Validate from "./validate";
import axios from "axios";
export const Register = () => {
  const [Data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [Error, setError] = useState({});
  const handleTakeData = (event) => {
    event.preventDefault();
    setData({
      ...Data,
      [event.target.name]: event.target.value,
    });
  };

  const handelSumbit = (e) => {
    e.preventDefault();
    const err = Validate(Data);
    console.log("Validation: ", err);
    setError(err);
    axios
      .post("http://localhost:3002/Register", {
        name: Data.name,
        email: Data.email,
        password: Data.password,
      })
      .then((result) => {
        console.log(result);
        setData({ name: "", email: "", password: "" });
        toast.success("Register SuccesFully", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });

    console.log("Submitted Data: ", Data);
  };

  return (
    <>
      <ToastContainer autoClose={5000} />

      <div className=" m-auto flex justify-center  items-center h-[100vh]">
        <section className="registerForm">
          <h1 className="text-center text-[20px] font-semibold">
            Register user
          </h1>
          <form action="" onSubmit={handelSumbit}>
            <div className=" mt-3">
              <label htmlFor="Name">Name :</label>
              <br />
              <input
                type="text"
                name="name"
                value={Data.name}
                placeholder="Enter Your Name"
                onChange={handleTakeData}
              />
              <p className="text-red-500">{Error.name}</p>
            </div>
            <div className=" mt-3">
              <label htmlFor="Name">Email :</label>
              <br />
              <input
                type="email"
                name="email"
                value={Data.email}
                placeholder="xyz@email.com"
                onChange={handleTakeData}
              />
              <p className="text-red-500">{Error.email}</p>
            </div>
            <div className=" mt-3">
              <label htmlFor="Name">Password :</label>
              <br />
              <input
                type="Password"
                name="password"
                value={Data.password}
                placeholder="*******"
                onChange={handleTakeData}
              />
              <p className="text-red-500">{Error.password}</p>
            </div>

            <div className=" justify-between  flex items-center">
              <button type="submit" className="btn">
                Register
              </button>
              <span className="text-center">
                Already have An Account ?
                <Link to={"/Login"}>
                  {" "}
                  <p className="text-blue-500">Login</p>
                </Link>
              </span>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
