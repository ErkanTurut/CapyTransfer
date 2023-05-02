import { Route, Routes } from "react-router-dom";
import { RouterType } from "../types/router.types";
import pagesData from "./pagesData";

const Router = () => {
  return (
    <Routes>
      {pagesData.map((page: RouterType) => (
        <Route key={page.path} path={page.path} element={page.component} />
      ))}
    </Routes>
  );
};

export default Router;
