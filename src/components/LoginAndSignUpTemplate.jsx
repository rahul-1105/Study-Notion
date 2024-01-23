import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const LoginAndSignUpTemplate = ({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
}) => {
  return (
    <div className="flex justify-evenly items-center h-[calc(100vh-65px)] text-white">
      <div>
        <h1> {title} </h1>
        <p>
          <span> {desc1} </span>
          <span> {desc2} </span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div>
          <div></div>
          <span>OR</span>
          <div></div>
        </div>

        <button>
          <FcGoogle /> Sign in with Google
        </button>
      </div>
      <div className="h-[450px] w-[450px] relative ">
        <img
          className="relative z-[5]"
          src={image}
          alt="students"
          width={450}
          height={450}
          loading="lazy"
        />
        <img
          className="absolute top-6 right-[-25px] z-[1]"
          src={frame}
          alt="frame"
          width={450}
          height={450}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LoginAndSignUpTemplate;
