import React from "react";
import LoginAndSignUpTemplate from "../components/LoginAndSignUpTemplate";
import loginImg from "../assets/login.webp";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <LoginAndSignUpTemplate
        title={"Welcome Back"}
        desc1={"Build skills for today, tomorrow, and beyond."}
        desc2={"Education to future-proof your career."}
        image={loginImg}
        formtype={"login"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
