import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Storefront,
} from "@material-ui/icons";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu Chính</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Trang chính
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Phân tích
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Thu nhập
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu Quản Lý</h3>
          <ul className="sidebarList">
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Danh sách sản phẩm
              </li>
            </Link>
            <Link to="/brands" className="link">
              <li className="sidebarListItem">
                <InterestsOutlinedIcon />
                Danh sách hãng laptop
              </li>
            </Link>
            <Link to="/newproduct" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Thêm sản phẩm
              </li>
            </Link>

            <Link to="/newbrand" className="link">
              <li className="sidebarListItem">
                <InterestsOutlinedIcon />
                Thêm hãng
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
