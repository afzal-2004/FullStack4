import { useContext, useEffect, useState } from "react";
import "./Components.css";
import { toast } from "react-toastify";
import axios from "axios";
import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
export const Contact = () => {
  const { setCurrentid } = useContext(UserContext);
  const [Data, setData] = useState([]);
  const [realoddata, setrealoddata] = useState(false);
  // eslint-disable-next-line no-unused-vars

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
  }, [realoddata]);

  const handeleDeleteItems = (id) => {
    axios
      .delete(`http://localhost:3002/contact_manager/deleteContact/${id}`)
      .then((result) => {
        // console.log(result);

        if (result.status === 200) {
          // console.log(result);
          toast.success("Deleted Succefully ", {
            autoClose: 3000,
          });
          setTimeout(() => {
            setrealoddata(true);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.err("Error ");
      });
  };

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
                    <MdAutoDelete
                      className="text-red-500"
                      onClick={() => {
                        handeleDeleteItems(data._id);
                      }}
                    />
                  </button>

                  <Link to={`/dashboard/update/${data._id}`}>
                    <button
                      className=" border border-green-700"
                      onClick={() => {
                        setCurrentid(data._id);
                      }}
                    >
                      <FaEdit className="text-green-500" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
