import { Link } from "react-router-dom";

export const Navbar = () => {
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
          <Link to={""}>Login</Link>
          <Link to={"/Register"}>Register</Link>
        </ul>
      </nav>
    </>
  );
};
