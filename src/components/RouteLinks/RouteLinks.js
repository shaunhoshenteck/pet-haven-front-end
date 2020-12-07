import {
  faHome,
  faSignInAlt,
  faSignOutAlt,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

export const RouteLinks = {
  user: [
    {
      icon: faHome,
      text: "Home",
      link: "/",
      color: "white",
    },
    {
      icon: faSignInAlt,
      text: "Login",
      link: "/userLogin",
      color: "white",
    },
  ],

  admin: [
    {
      icon: faHome,
      text: "Admin",
      link: "/admin",
      color: "white",
    },

    {
      icon: faSignOutAlt,
      text: "Logout",
      link: "/logout",
      color: "white",
    },
    {
      icon: faClipboard,
      text: "Edit Users",
      link: "/editUsers",
      color: "white",
    },
  ],
};
