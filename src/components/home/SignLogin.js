import React from "react";
import { useNavigate } from "react-router-dom";

const buttonProperty =
  "sm:text-2xl text-xl py-2 md:px-14 sm:px-10 px-7 rounded-xl border-slate-950 border-2 hover:md:scale-125 hover:scale-110 transition-transform";

const SignLogin = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signUp");
  };

  const handleLogIn = () => {
    navigate("/logIn");
  };

  return (
    <div className=" my-7 mx-7 flex-horizontal-vertical md:gap-12 sm:gap-10 gap-8">
      <button
        style={{
          backgroundColor: "rgb(0, 48, 73)",
          color: "rgb(253, 240, 213)",
        }}
        className={buttonProperty}
        onClick={handleSignUp}
      >
        SignUp
      </button>
      <button
        style={{
          backgroundColor: "rgb(186, 24, 27)",
          color: "rgb(253, 240, 213)",
        }}
        className={buttonProperty}
        onClick={handleLogIn}
      >
        LogIn
      </button>
    </div>
  );
};

export default SignLogin;
