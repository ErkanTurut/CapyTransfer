import { RouterType } from "../types/router.types";
import About from "../pages/About";
import Home from "../pages/Home";
import Transfers from "../pages/Transfers";

const pagesData: RouterType[] = [
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
    children: [
      {
        path: "/about/child1",
        component: <About />,
        title: "Child 1",
        show: true,
      },
      {
        path: "/about/child2",
        component: <About />,
        title: "Child 2",
        show: true,
      },
    ],
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
