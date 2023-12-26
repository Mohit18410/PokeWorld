import React from "react";

const SignLogin = () => {
  return (
    <div className=" my-7 mx-7 flex justify-center items-center gap-12">
      <button
        style={{
          backgroundColor: "rgb(0, 48, 73)",
          color: "rgb(253, 240, 213)",
        }}
        className="text-2xl py-2 px-14 rounded-xl border-slate-950 border-2"
      >
        SignUp
      </button>
      <button
        style={{
          backgroundColor: "rgb(186, 24, 27)",
          color: "rgb(253, 240, 213)",
        }}
        className="text-2xl py-2 px-14 rounded-xl border-slate-950 border-2"
      >
        LogIn
      </button>
    </div>
  );
};

export default SignLogin;
