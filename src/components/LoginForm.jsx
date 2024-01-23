import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In Sccessfully");
    const finalData = { ...formData };
    console.log(finalData);
    navigate("/");
  };

  return (
    <form
      action=""
      className="w-[450px] flex flex-col justify-center items-center gap-4 p-4 text-white"
      onSubmit={submitHandler}>
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

      {/* PASSWORD SECTION */}
      <div className="flex flex-col gap-3 w-full relative">
        <label className="text-sm " htmlFor="password">
          Password <sup className="text-red-400">*</sup>
        </label>

        <input
          className="py-3 px-4 w-full rounded-md bg-slate-900 border-[1px] border-solid border-white placeholder:text-slate-400 "
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          id="password"
          placeholder="Enter password"
          onChange={changeHandler}
        />

        <span
          className="absolute bottom-11 right-3 text-2xl"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <span className="text-right text-sm">Forget Password</span>
      </div>

      {/* BUTTON */}
      <button className="p-2 w-full bg-yellow-400 text-black text-base font-semibold mt-6 rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
