import { routerType } from "../types/router.types";
import About from "./About";
import Home from "./Home";
import Transfers from "./Transfers";

const pagesData: routerType[] = [
  {
    path: "/",
    component: <Home />,
    title: "Home",
    icon: "",
    show: true,
  },
  {
    path: "/about",
    component: <About />,
    title: "About",
    icon: "",
    show: true,
  },
  {
    path: "/transfers",
    component: <Transfers />,
    title: "Transfers",
    icon: "",
    show: true,
  },
];

export default pagesData;
