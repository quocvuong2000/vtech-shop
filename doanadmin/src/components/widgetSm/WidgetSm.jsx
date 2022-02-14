import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      const getUsers = async () => {
        try {
          const res = await publicRequest.get("users/");
          setUsers(res.data);
        } catch {}
      };
      getUsers();
    }, []);
  return (
    
    <div className="widgetSm">
      <span className="widgetSmTitle">Thành viên mới tham gia</span>
      <ul className="widgetSmList">
      {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Chi tiết
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
