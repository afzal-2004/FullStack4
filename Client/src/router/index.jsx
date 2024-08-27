import { Navbar } from "../Components/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Register } from "../Components/Register";
import { Login } from "../Components/Login";
// import Dashboards from "../pages/Dashboard/Dashboards";
import { AddContact } from "../Components/AddContact";
import { Sidebar } from "../Components/Sidebar";
import { Profile } from "../Components/Profile";
export const Router = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="/dashboard/AddContact" element={<AddContact />} />
              <Route path="/dashboard/Profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
const DashboardLayout = () => {
  return (
    <>
      <div className="flex gap-2">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
