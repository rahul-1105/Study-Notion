import React from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

//   console.log(!isLoggedIn);
//   console.log(isLoggedIn);

  return (
    <div>
      <nav className="flex justify-around items-center gap-4 h-[65px] text-base text-white">
        <Link to={"/"}>
          {/* <h1 className="font-semibold text-3xl">StudyNotion</h1> */}
          <img src={logo} alt="" />
        </Link>
        <ul className="flex gap-8">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
        </ul>
        <div className="flex gap-8">
          {!isLoggedIn && (
            <Link to={"/signup"}>
              <button className="border-[1px] border-solid border-white rounded-md py-2 px-4 ">
                Sign Up
              </button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to={"/login"}>
              <button className="border-[1px] border-solid border-white rounded-md py-2 px-4 ">
                Login
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to={"/dashboard"}>
              <button className="border-[1px] border-solid border-white rounded-md py-2 px-4 ">
                Dashboard
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to={"/"}>
              <button
                className="border-[1px] border-solid border-white rounded-md py-2 px-4 "
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out")
                }}>
                Logout
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
