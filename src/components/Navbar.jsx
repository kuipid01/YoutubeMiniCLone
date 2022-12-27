import React, { useState } from "react";
import {
  AiFillYoutube,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { BiMicrophone } from "react-icons/bi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
 
  return (
    <nav className="transition ease-in-out delay-150 w-full h-[45px] pt-2 pl-4 flex items-center justify-between md:justify-around relative">
      <div className="ham w-2/3 md:w-1/5  flex items-center">
        <div onClick={() => setOpenNav(!openNav)} className="  text-xl">
          <GoThreeBars className=" cursor-pointer mr-4" />
        </div>

        <div className="text-2xl">
          <AiFillYoutube className=" text-red-600 font-extrabold " />
        </div>

        <Link to="/" >
        <h1 className=" font-bold">KYoutube</h1>
        </Link>
        
      </div>

      <div className="flex w-3/5  ml-9 h-full rounded-full ">
        <div className="hidden search ml-9 md:flex w-full border h-full justify-between rounded-full overflow-hidden border-gray-600">
          <input
            placeholder="Search"
            className=" w-3/4 pl-3 h-full placeholder:text-gray-500"
          />
          <div className="iconsearch  h-full place-items-center grid w-1/6 bg-gray-200">
            <AiOutlineSearch className=" bg-gray-200 text-black" />
          </div>
        </div>
        <div className="md:grid hidden h-full rounded-full ml-3  w-11 place-items-center bg-gray-200">
          <BiMicrophone className=" text-black-700  bg-transparent" />
        </div>
      </div>
      <div className="last flex w-1/5 justify-end pr-7">
        <AiOutlineBell className=" text-black text-xl mr-3" />
        <AiOutlineFolderAdd className=" text-black text-xl" />
      </div>
      {openNav ? (
        <div className={` transition ease-in-out delay-150 navOpen absolute  ${openNav?" w-[250px]" : "w-0"} p-2 top-[45px] z-30 left-0 bg-white pt-9 h-[100vh]`}>
          <ul className=" w-full bg-inherit flex flex-col justify-start items-start ">
            <li className=" p-2 flex items-start justify-center mb-3 bg-gray-200 rounded-xl w-[90%]">
              <a href="#" className=" bg-transparent"> Home</a>
            </li>
            <li className="  p-2 flex items-start justify-center mb-3 bg-gray-200 rounded-xl w-[90%]">
              <a href="#" className=" bg-transparent"> Shorts</a>
            </li>
            <li className=" p-2 flex items-start justify-center  mb-3 bg-gray-200 w-[90%] rounded-xl">
              <a href="#" className=" bg-transparent block font-thin">Subscriptions</a>
            </li>
          </ul>
        </div>
      ) : ""}
    </nav>
  );
};

export default Navbar;
