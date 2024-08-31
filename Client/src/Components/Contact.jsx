import { useEffect, useState } from "react";
import "./Components.css";
import axios from "axios";
import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const Contact = () => {
  const [Data, setData] = useState([]);
  // console.log(Data);
  useEffect(() => {
    axios
      .get("http://localhost:3002/contact_manager/getContact", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className=" w-full  ">
        <table className="w-full">
          <thead>
            <tr className=" border border-black  bg-red-200">
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>PhoneNo.</th>
              <th>Address</th>
              <th>Opperation</th>
            </tr>
          </thead>
          <tbody className="  bg-red-700">
            {Data.map((data, i) => (
              <tr
                key={i}
                className=" border border-black  bg-slate-200 text-center  items-center text-[18px] "
              >
                <td className="p-3  uppercase">{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Phone}</td>
                <td>{data.Address}</td>
                <td
                  className="flex justify-between  p-2 
                text-[25px] "
                >
                  <button className=" border border-red-500">
                    <MdAutoDelete className="text-red-500" />
                  </button>
                  <button className=" border border-green-700">
                    <FaEdit className="text-green-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
