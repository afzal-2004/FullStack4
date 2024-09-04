import "./Components.css";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../App";
// eslint-disable-next-line react/prop-types, no-unused-vars
export const AddContact = () => {
  const { setIndecator, Update, data, setdata, Currentid } =
    useContext(UserContext);
  const navigate = useNavigate();
  const payload = {
    Name: data.name,
    Email: data.email,
    Phone: data.mobilenumber,
    Address: data.address,
  };
  const ontakedata = (e) => {
    e.preventDefault();
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handletakedata = (e) => {
    e.preventDefault();

    {
      !Update
        ? axios
            .post("http://localhost:3002/contact_manager/addContact", payload, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((result) => {
              if (result.data.success) {
                // console.log(result);
                toast.success("Contact Added Succcefully", {
                  autoClose: 3000,
                });

                setdata({
                  name: "",
                  email: "",
                  mobilenumber: "",
                  address: "",
                });
                setTimeout(() => {
                  navigate("/dashboard/contact");
                  setIndecator(1);
                }, 3000);
              }
            })
            .catch((err) => {
              console.log(err);
              toast.error("Something went wrong ", {
                autoClose: 3000,
              });
            })
        : axios
            .put(
              `http://localhost:3002/contact_manager/updateContact/${Currentid}`,
              payload
            )
            .then((result) => {
              if (result.data.success) {
                // console.log(result);
                toast.success("Contact Update Succefully ", {
                  autoClose: 3000,
                });

                setdata({
                  name: "",
                  email: "",
                  mobilenumber: "",
                  address: "",
                });
                setTimeout(() => {
                  navigate("/dashboard/contact");
                  setIndecator(1);
                }, 3000);
              }
            })
            .catch((err) => {
              console.log(err);
              toast.error("Something went wrong ", {
                autoClose: 3000,
              });
            });
    }
  };

  return (
    <>
      <div className="p-4">
        {" "}
        <main className=" bg-slate-400 p-3 w-[90%] m-auto rounded-2xl">
          <h1 className="text-center text-[25px]"> Create Contact</h1>
          <form onSubmit={handletakedata}>
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
              className="bg-green-200 p-3 
            mt-[3vh] w-full rounded-xl"
            >
              {Update ? "Update Contact" : "Add new"}{" "}
            </button>
          </form>
        </main>
      </div>
    </>
  );
};
