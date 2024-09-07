import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const handleLogoutAccount = () => {
    localStorage.setItem("Token", "");
  };
  const onOnnavigate = () => {
    navigate("/dashboard/contact");
  };

  return (
    <>
      <div className=" h-[90vh] w-full border border-red-500 flex items-center justify-center">
        <div className="w-[300px] h-[200px] bg-white rounded-lg p-3  flex  flex-col justify-center items-center ">
          <h1 className=" text-[15px] font-semibold">
            {" "}
            Are you Sure Are you want to logout this Account{" "}
          </h1>
          <div className=" w-full flex  justify-between mt-4">
            <button
              onClick={handleLogoutAccount}
              className=" px-3 py-1 bg-red-500 rounded-md"
            >
              {" "}
              Yes{" "}
            </button>
            <button
              onClick={onOnnavigate}
              className=" px-3 py-1 bg-green-500 rounded-md"
            >
              {" "}
              cancel{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
