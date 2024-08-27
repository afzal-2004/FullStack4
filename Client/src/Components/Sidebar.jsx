import "./Components.css";

import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  const [Indecator, setIndecator] = useState(1);

  useEffect(() => {
    setIndecator(1);
  }, []);

  return (
    <>
      <div className="sidebar">
        <ul className="flex flex-col justify-center  h-full gap-6 text-[25px] p-4   font-se">
          <Link to={"/dashboard"}>
            <li
              className={`${Indecator === 1 && "sideBarindicator"}`}
              onClick={() => {
                setIndecator(1);
              }}
            >
              <FaPhoneAlt className="iconClass" />
              Contact
            </li>
          </Link>

          <Link to={"/dashboard/AddContact"}>
            <li
              className={`${Indecator === 2 && "sideBarindicator"}`}
              onClick={() => {
                setIndecator(2);
              }}
            >
              <BsFillTelephonePlusFill className="iconClass" />
              <p className="text-nowrap">Add Contact</p>{" "}
            </li>
          </Link>
          <Link to={"/dashboard/Profile"}>
            <li
              className={`${Indecator === 3 && "sideBarindicator"}`}
              onClick={() => {
                setIndecator(3);
              }}
            >
              <CgProfile className="iconClass" />
              <p>Profile</p>
            </li>
          </Link>
          <Link to={"/dashboard"}>
            <li
              className={`${Indecator === 4 && "sideBarindicator"}`}
              onClick={() => {
                setIndecator(4);
              }}
            >
              <IoMdLogOut className="iconClass" />

              <p>Exit</p>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
