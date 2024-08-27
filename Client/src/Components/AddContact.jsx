import "./Components.css";
import { useState } from "react";

export const AddContact = () => {
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
  };
  return (
    <>
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
