import React from "react";
import { Link } from "react-router-dom";
import { RouteLinks } from "../RouteLinks/RouteLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

const NavItems = (props) => {
  const element = (item, i) => (
    <div key={i} className="navItem">
      <Link onClick={props.onHideNav} to={item.link}>
        <FontAwesomeIcon
          className="sideNav-icon"
          color={item.color}
          icon={item.icon}
        />
        {item.text}
      </Link>
    </div>
  );

  const showLinks = () =>
    RouteLinks.user.map((item, i) => {
      return element(item, i);
    });

  const showAdminLinks = () =>
    RouteLinks.admin.map((item, i) => {
      return element(item, i);
    });

  return (
    <div>
      {showLinks()}
      <div>
        <div className="nav-split">Admin Options</div>
      </div>
      {showAdminLinks()}
    </div>
  );
};

export default NavItems;
