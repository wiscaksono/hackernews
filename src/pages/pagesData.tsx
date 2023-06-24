import Home from "./home";

export type RouterProps = {
  title: string;
  path: string;
  element: JSX.Element;
}[];

const pagesData: RouterProps = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/:topics",
    element: <Home />,
    title: "Home",
  },
];

export default pagesData;
