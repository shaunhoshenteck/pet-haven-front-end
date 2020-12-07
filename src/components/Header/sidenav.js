import React from "react";
import SideNav from "react-simple-sidenav";
import NavItems from "./NavItems";

const MainNav = (props) => {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: "green",
        maxWidth: "200px",
      }}
    >
      <NavItems />
    </SideNav>
  );
};

export default MainNav;