import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";

import "./navbar.css";

const Navbar = () => {
  const name = useSelector((state) => state.user.userInfo.name);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Vincent App</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src="https://i.ibb.co/ZSJ2Y2B/Wechat-IMG39.jpg"
            alt=""
          />
          <span className="navbarName">{name}</span>

          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
