import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavLinks } from "../../Utils/Constant";
import logo from "../../assets/Drona.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const tempuser = localStorage.getItem("user");
  const user = JSON.parse(tempuser);

  return (
    <div className="w-full p-4 justify-center lg:hidden items-center bg-purple-100/90 h-[60px] flex-col">
      <Link to="/" className="top-2 left-1 absolute">
        <img src={logo} className="h-[45px]" alt="logo" />
      </Link>
      <button
        className="absolute top-[20px] right-[20px] lg:hidden cursor-pointer hover:scale-110 hover:rotate-12 transition"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {!isSidebarOpen && (
          <HiOutlineMenuAlt3 className="text-3xl text-secondary" />
        )}
      </button>
      <ul
        className={
          isSidebarOpen
            ? "flex flex-col gap-3 pt-[60px] h-screen w-screen absolute z-10 top-0 left-0 bg-orange-300"
            : "hidden"
        }
      >
        <h1 className="text-center text-[36px] font-[800] mb-[10px] mt-[-45px] ml-3 text-orange-500">
          Drona Learning Academy
        </h1>
        {NavLinks.map((navlink) => {
          const { id, text, url } = navlink;
          return (
            <li
              key={id}
              className="capitalize"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <NavLink
                to={url}
                className="block text-purple-900 font-semibold p-2 transition text-[20px] text-center mx-1 hover:text-orange-600 rounded-md hover:translate-x-1 hover:font-[700] hover:bg-orange-200"
              >
                {" "}
                {text}{" "}
              </NavLink>
            </li>
          );
        })}
        {user?.accountType === "SuperAdmin" ? (
          <li className="capitalize">
            <NavLink
              to="dashboard"
              className="block text-purple-900 font-semibold p-2 transition text-[20px] text-center mx-1 hover:text-orange-600 rounded-md hover:translate-x-1 hover:font-[700] hover:bg-orange-200"
            >
              dashboard
            </NavLink>
          </li>
        ) : (
          <></>
        )}
        <li className="capitalize">
          <NavLink
            to={user ? `/user` : `/login`}
            className="block text-purple-900 font-semibold p-2 transition text-[20px] text-center mx-1 hover:text-orange-600 rounded-md hover:translate-x-1 hover:font-[700] hover:bg-orange-200"
          >
            {user ? "User Details" : "Login"}
          </NavLink>
        </li>
        <button
          className="z-20 absolute top-[35px] right-[30px] hover:rotate-12 hover:scale-110"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <AiOutlineClose className="text-3xl text-red-700 font-bold " />
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
