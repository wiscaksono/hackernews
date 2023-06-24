import { Route, Routes } from "react-router-dom";
import pagesData, { RouterProps } from "./pagesData";

const Router = () => {
  return (
    <Routes>
      {pagesData.map(({ path, title, element }: RouterProps[0]) => (
        <Route key={title} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default Router;
