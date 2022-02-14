import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Vương And Huyên Management</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">6</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">9</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://www.pinclipart.com/picdir/middle/550-5506338_pepe-the-frog-transparent-png-transparent-pepe-png.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
