import { useState } from "react";
import "./Components.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Validate from "./validate";
import axios from "axios";
export const Register = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [Error, setError] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [serverError, setserverError] = useState([]);
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
    // console.log("Validation: ", err);
    setError(err);
    axios
      .post("http://localhost:3002/contact_manager/register", {
        name: Data.name,
        email: Data.email,
        password: Data.password,
      })
      .then((result) => {
        console.log(result.data);
        if (result.data.success) {
          console.log(result);
          setData({ name: "", email: "", password: "" });
          toast.success("Register SuccesFully", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
          });
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        }
      })
      .catch((err) => {
        setserverError(err.response?.data.errors[0].msg);
        console.log(err);
        console.log(err.response?.data);
        console.log(err.response?.data.errors);
        console.log(err.response?.data.errors[0]);
        console.log(err.response?.data.errors[0].msg);

        toast.error(
          err.response?.data.errors[0].msg || "Something went wrong "
        );
      });
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
              <span className="text-center flex text-[14px] justify-center items-center">
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
