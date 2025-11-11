import { Avatar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navPath, authPath } from "../data/navbar";
import Basket from "./Basket";

function Navbar() {
  const authMember = null;
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-md bg-black/20">
      <div className="align-elements navbar">
        <div className="navbar-start">
          <NavLink to="/">
            <h3 className="text-2xl font-bold text-white">MOKCHA</h3>
          </NavLink>
        </div>

        <div className="navbar-end gap-7 text-white text-xl">
          {/* path */}
          {navPath.map(({ id, to, label }) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-[#1b76d2] p-1 rounded" : ""
              }
              key={id}
              to={to}
            >
              {label}
            </NavLink>
          ))}

          {/* auth */}
          {authMember
            ? authPath.map(({ id, to, label }) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-[#1b76d2] p-1 rounded" : ""
                  }
                  key={id}
                  to={to}
                >
                  {label}
                </NavLink>
              ))
            : null}
          <Basket />
          {!authMember ? (
            <Button variant="contained" size="small">
              Login
            </Button>
          ) : (
            <Avatar src="/broken-image.jpg" className="cursor-pointer" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
