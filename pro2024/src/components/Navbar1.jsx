import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSignOut } from "../redux/Users";
import logos from "../images/logo1.png";

function Navbar1() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersReducer.user);

  const handleLogout = () => {
    dispatch(userSignOut());
  };

  return (
    <div className="bg-[#393E46] p-4 flex justify-between items-center">
      {/* Left side buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src={logos} alt="logo image" className="w-60 h-25 "></img>
        </Link>
        <Link to="/UploadFile">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded">
            Upload
          </button>
        </Link>
        <Link to="/get_docs">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded">
            Get Docs
          </button>
        </Link>
        <Link to="/share_docs">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded">
            Share Docs
          </button>
        </Link>
      </div>

      {user && (
        <div className="text-white font-bold">Welcome {user.fullName} !!</div>
      )}
      {/* Right side buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/about">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded">
            AboutUs
          </button>
        </Link>
        <Link to="/changepassword">
          <button className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded">
            Change Password
          </button>
        </Link>
        <Link to="/">
          <button
            className="bg-[#00ADB5] text-[#EEEEEE] font-bold px-4 py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar1;
