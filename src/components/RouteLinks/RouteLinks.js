import { faHome, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

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
      icon: "home",
      text: "Admin",
      link: "/admin",
    },

    {
      icon: "sign-out",
      text: "Logout",
      link: "/logout",
    },
  ],
};
