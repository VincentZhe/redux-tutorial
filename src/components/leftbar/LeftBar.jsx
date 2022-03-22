import React from "react";

import "./leftbar.css";

import MenuLink from "../menuLink/MenuLink";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import GroupIcon from "@mui/icons-material/Group";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import ScheduleIcon from "@mui/icons-material/Schedule";
import HearingIcon from "@mui/icons-material/Hearing";
import SettingsIcon from "@mui/icons-material/Settings";

import { useSelector } from "react-redux";

const Leftbar = () => {
  const user = useSelector((state) => state.user.userInfo);
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<HomeIcon />} text="Homepage" />
        <MenuLink icon={<FormatListBulletedIcon />} text="Lists" />
        <MenuLink icon={<ShoppingBasketIcon />} text="Products" />
        <MenuLink icon={<GroupIcon />} text="Groups" />
        <MenuLink icon={<FileCopyIcon />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualIcon />} text="Photos" />
        <MenuLink icon={<MovieCreationIcon />} text="Videos" />
        <MenuLink icon={<ScheduleIcon />} text="Schedule" />
        <MenuLink icon={<HearingIcon />} text="Wishlist" />
        <MenuLink icon={<SettingsIcon />} text="Settings" />
        {user.name !== undefined && (
          <MenuLink icon={<ExitToAppIcon />} text="Logout" />
        )}
      </div>
    </div>
  );
};

export default Leftbar;
