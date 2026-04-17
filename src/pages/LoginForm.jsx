import React, { useEffect, useState } from "react";
import Inputform from "../components/Inputform";
import Button from "../components/Button";
import img3 from "../assets/sign.png";

const LoginForm = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [remember, setRemember] = useState(false);

  const handlelogin = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login, //Spread operator for copy the existing values
      [name]: value,
    });
  };

  //Load the data on page load
  useEffect(() => {
    const saveEmail = JSON.parse(localStorage.getItem("User"));
    if (saveEmail) {
      setLogin(saveEmail);
      setRemember(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); //Stops the browser to reload the page (default action)

    //Save the user email and password in local storage
    if (remember) {
      localStorage.setItem("User", JSON.stringify(login));
    } else {
      localStorage.removeItem("User", JSON.stringify(login));
    }

    console.log("Email : ", login.email, " Password : ", login.password);
  };
  return (
    <div
      className="flex items-center justify-center gap-14"
      style={{ fontFamily: '"Open Sans", sans-serif' }}
    >
      {/* Form Portion */}
      <div className="flex flex-col justify-center gap-10 w-[380px] min-h-[500px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[#ff6d34] text-[30px] font-semibold leading-10 italic ">
            Welcome Back
          </h1>
          <p className="text-[16px] ">
            Don't have an account?{" "}
            <span className="text-[#ff6d34] font-semibold text-[18px] hover:text-[#00bda6] hover:underline transition-all duration-500 cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <Inputform
            label="Email"
            name="email"
            type="email"
            placeholder="ali@mail.com"
            onChange={handlelogin}
            value={login.email}
          />
          <Inputform
            label="Password"
            name="password"
            type="password"
            placeholder="password"
            onChange={handlelogin}
            value={login.password}
          />
          <div className="flex items-center justify-between">
            <label htmlFor="remember" className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remeber me
            </label>

            <p className="text-[#ff6d34] font-semibold text-[18px] hover:text-[#00bda6] hover:underline transition-all duration-500 cursor-pointer">
              Forgot Password
            </p>
          </div>
          <Button
            title="Sign In"
            styling="py-1 text-[20px] leading-8 font-semibold text-white cursor-pointer active:translate-y=1 active:shadow-sm shadow-md rounded-2xl bg-[#ff6d34] hover:bg-[#00bda6] transiton-all duration-300"
          />
        </form>
      </div>

      {/* Image Portion */}
      <div className="flex items-center justify-centern w-[380px] min-h-[500px]">
        <div className="flex items-center justify-center">
          <div className="relative top-[68px] w-[320px] h-[320px] rounded-full bg-[#ff6d34] flex items-center justify-center -z-50"></div>
          <img
            src={img3}
            alt=""
            className="absolute w-[520px] top-[260px] z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
