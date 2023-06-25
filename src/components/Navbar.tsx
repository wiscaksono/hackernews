import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="py-5 border-b">
      <h1 className="text-4xl font-bold text-center">
        <Link to="/">Hackernews</Link>
      </h1>
      <ul className="flex items-center justify-center space-x-4 my-4 [&>li]:cursor-pointer">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/beststories">Best Stories</NavbarLink>
        <NavbarLink to="/newstories">New Stories</NavbarLink>
        <NavbarLink to="/jobstories">Job Stories</NavbarLink>
        <NavbarLink to="/showstories">Show Stories</NavbarLink>
      </ul>
    </nav>
  );
};

const NavbarLink = ({ to, children }: { to: string; children: string }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "underline underline-offset-2" : ""
        }
      >
        {children}
      </NavLink>
    </li>
  );
};
