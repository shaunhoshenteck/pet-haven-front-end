import React from "react";
import { Link } from "react-router-dom";
import { RouteLinks } from "../RouteLinks/RouteLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

const NavItems = (props) => {
  const element = (item, i) => (
    <div key={i} className="navItem">
      <Link to={item.link}>
        <FontAwesomeIcon color={item.color} icon={item.icon} />
      </Link>
    </div>
  );
  const showLinks = () =>
    RouteLinks.user.map((item, i) => {
      return element(item, i);
    });

  return <div>{showLinks()}</div>;
};

export default NavItems;
