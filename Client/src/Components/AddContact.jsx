import "./Components.css";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const AddContact = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    address: "",
  });

  const ontakedata = (e) => {
    e.preventDefault();
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handletakedata = () => {
    console.log(data);
    axios
      .post(
        "http://localhost:3002/contact_manager/dashboard/AddContact",
        {
          Name: data.name,
          Email: data.email,
          Phone: data.mobilenumber,
          Address: data.address,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => {
        if (result.data.status) {
          console.log(result.data);
          toast.success("Conatct Added Succesfully");
        }
      })
      .catch((err) => console.log(err));
    navigate("/dashboard");
  };
  return (
    <>
      <ToastContainer />
      <div className="p-4">
        {" "}
        <main className=" bg-slate-400 p-3 w-[90%] m-auto rounded-2xl">
          <h1 className="text-center text-[25px]"> Create Contact</h1>
          <form action="sumbit" onSubmit={handletakedata} className=" ">
            <input
              type="text"
              value={data.name}
              name="name"
              placeholder="Enter Name"
              onChange={ontakedata}
            />

            <input
              type="text"
              name="email"
              value={data.email}
              placeholder="Enter Email"
              onChange={ontakedata}
            />
            <input
              type="text"
              value={data.mobilenumber}
              placeholder="Enter Phone Number"
              name="mobilenumber"
              onChange={ontakedata}
            />
            <input
              type="text"
              value={data.address}
              placeholder="Enter Address"
              name="address"
              onChange={ontakedata}
            />
            <button
              type="sumbit"
              className="bg-green-200 p-3 
            mt-[3vh] w-full rounded-xl"
            >
              Add new{" "}
            </button>
          </form>
        </main>
      </div>
    </>
  );
};
