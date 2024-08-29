import { Sidebar } from "../../Components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
const Dashboards = () => {
  const [Data, setData] = useState([]);
  console.log(Data);
  useEffect(() => {
    axios
      .get("http://localhost:3002/contact_manager/contacts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(`Bearer ${localStorage.getItem("token")}`);
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  );
};

export default Dashboards;
