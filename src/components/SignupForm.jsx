import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const [showCreatePassword, setShowCreatePassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Account created Successfully");
    const finalData = { ...formData}
    console.log(finalData);
    navigate("/");
  };
  return (
    <div>
      <form
        action=""
        className="w-[450px] flex flex-col justify-center items-center gap-4 p-4 text-white"
        onSubmit={submitHandler}>
        {/* STUDENT AND INSTRUCTOR SECTION */}
        <div className="rounded-full flex gap-2 p-1 text-base bg-slate-900">
          <button className="rounded-full bg-slate-950 py-2 px-6" type="button">
            Student
          </button>

          <button className="rounded-full bg-slate-950 py-2 px-6" type="button">
            Instructor
          </button>
        </div>

        {/* FIRST AND LAST NAME SECTION */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm " htmlFor="firstName">
              First Name <sup className="text-red-400">*</sup>
            </label>

            <input
              className="py-3 px-4 w-full rounded-md bg-slate-900 border-[1px] border-solid border-white placeholder:text-slate-400 "
              type="text"
              name="firstName"
              value={formData.firstName}
              id="firstName"
              placeholder="Enter first name"
              onChange={changeHandler}
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm " htmlFor="lastName">
              Last Name <sup className="text-red-400">*</sup>
            </label>

            <input
              className="py-3 px-4 w-full rounded-md bg-slate-900 border-[1px] border-solid border-white placeholder:text-slate-400 "
              type="text"
              name="lastName"
              value={formData.lastName}
              id="lastName"
              placeholder="Enter last name"
              onChange={changeHandler}
            />
          </div>
        </div>

        {/* EMAIL SECTION */}
        <div className="flex flex-col gap-3 w-full">
          <label className="text-sm " htmlFor="email">
            Email Address <sup className="text-red-400">*</sup>
          </label>
          <input
            className="py-3 px-4 w-full rounded-md bg-slate-900 border-[1px] border-solid border-white placeholder:text-slate-400 "
            type="email"
            name="email"
            value={formData.email}
            id="email"
            placeholder="Enter email address"
            onChange={changeHandler}
          />
        </div>

        {/* CREATE PASSWORD AND CONFIRM PASSWORD SECTION  */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3 w-full relative">
            <label className="text-sm " htmlFor="createPassword">
              Create Password <sup className="text-red-400">*</sup>
            </label>

            <input
              className="py-3 px-4 w-full rounded-md bg-slate-900 border-[1px] border-solid border-white placeholder:text-slate-400 "
              type={showCreatePassword ? "text" : "password"}
              name="createPassword"
              value={formData.createPassword}
              id="createPassword"
              placeholder="Create Password"
              onChange={changeHandler}
            />

            <span
              className="absolute bottom-3 right-3 text-2xl"
              onClick={() => setShowCreatePassword(!showCreatePassword)}>
              {showCreatePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <div className="flex flex-col gap-3 w-full relative">
            <label className="text-sm " htmlFor="password">
              Confirm Password <sup className="text-red-400">*</sup>
            </label>

            <input
              className="py-3 px-4 w-full rounded-md bg-slate-900 border-[1px] border-solid border-white placeholder:text-slate-400 "
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
            />

            <span
              className="absolute bottom-3 right-3 text-2xl"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <button className="p-2 w-full bg-yellow-400 text-black text-base font-semibold mt-6 rounded-md">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
