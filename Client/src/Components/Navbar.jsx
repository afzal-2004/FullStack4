import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";
export const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <nav
        className=" flex justify-between bg-slate-200 p-2  
       
       "
      >
        <Link to={"/"}>
          <h1 className="  text-[20px] sm:text-[25px] font-semibold items-center ">
            Conatct MS
          </h1>
        </Link>

        <ul className=" flex  sm:gap-3 text-[15px]  sm:text-[20px] gap-2  ">
          <Link to={""}>About</Link>

          {user ? (
            <>
              <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/"} className=" text-red-400">
                {user.name.toUpperCase()}
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/Register"}>Register</Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};
