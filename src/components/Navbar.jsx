import React, { useEffect, useRef, useState } from "react";
import image from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [searchbar, setSearchbar] = useState(false);
  const searchRef = useRef();

  //Close Search bar function
  const handleClose = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchbar(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);
  return (
    <>
      <div className="bg-transparent fixed top-0 left-0 w-full flex items-center justify-between text-white px-5 py-4 ">
        <div>
          <Link to={"/"}>
            <img className="w-[100px] cursor-pointer" src={image} alt="" />
          </Link>
        </div>
        <ul className="flex items-center justify-around gap-9 text-[20px] leading-10">
          <li className="hover:text-[#ff6d34] transition-all duration-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-[#ff6d34] transition-all duration-500">
            <Link to={"/"}>About</Link>
          </li>
          <li className="hover:text-[#ff6d34] transition-all duration-500">
            <Link to={"/"}>Programs</Link>
          </li>
          <li className="hover:text-[#ff6d34] transition-all duration-500">
            <Link to={"/"}>Courses</Link>
          </li>
          <li className="hover:text-[#ff6d34] transition-all duration-500">
            <Link to={"/"}>Reviews</Link>
          </li>
        </ul>
        <div className="flex items-center justify-around gap-6">
          {/* Search Logic */}
          <div ref={searchRef} className="relative flex items-center">
            {/* Search Icon */}
            <div
              className={`absolute  right-0 flex items-center rounded-full transition-all duration-300 ${searchbar ? "w-56 p-2 bg-[#ff6d34] -top-4" : "w-10 h-10 justify-center -top-5"} overflow-hidden`}
            >
              <FaSearch
                onClick={(e) => setSearchbar(true)}
                className={`text-xl  hover:text-[#ff6d34]  cursor-pointer `}
              />

              {/* Search Overlay */}
              <input
                type="text"
                placeholder="Search here"
                className={`bg-transparent outline-none ${searchbar ? "w-full ml-2 opacity-100" : "w-0 opacity-0"}`}
              />
            </div>
          </div>

          <Button
            onClick={"/sign_in"}
            title="Sign In"
            styling="bg-[#ff6d34] px-4 py-1 rounded-full text-[18px] text-white cursor-pointer hover:bg-[#00bdbd] transition-all duration-400"
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
