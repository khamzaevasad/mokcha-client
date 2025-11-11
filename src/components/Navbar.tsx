import { Avatar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navPath, authPath } from "../data/navbar";
import Basket from "./Basket";
import { Menu } from "lucide-react";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar() {
  const authMember = true;
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-md bg-black/20">
        <div className="align-elements navbar">
          {/* start */}
          <div className="navbar-start">
            <NavLink to="/">
              <h3 className="text-2xl font-bold text-white">MOKCHA</h3>
            </NavLink>
          </div>

          {/* center */}
          <div className="navbar-center gap-7 text-white text-xl hidden md:flex">
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
          </div>

          {/* end */}
          <div className="navbar-end gap-7 text-white text-xl">
            <Basket />
            {!authMember ? (
              <Button variant="contained" size="small">
                Login
              </Button>
            ) : (
              <Avatar src="/broken-image.jpg" className="cursor-pointer" />
            )}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <Menu className="cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* ResponsiveMenu */}
      <ResponsiveMenu open={open} authMember={authMember} />
    </>
  );
}

export default Navbar;
