import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navPath, authPath } from "../data/navbar";
import Basket from "./Basket";
import { Menu } from "lucide-react";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar() {
  const authMember = false;
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
        <div className="align-elements navbar">
          {/* start */}
          <div className="navbar-start">
            <NavLink to="/">
              <h3 className="text-2xl font-bold text-[--color-background]">
                MOKCHA
              </h3>
            </NavLink>
          </div>

          {/* center */}
          <div className="navbar-center gap-7 text-white text-xl hidden md:flex">
            {navPath.map(({ id, to, label }) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-foreground px-0.5  rounded"
                    : "text-primary rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted/60 px-0.5"
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
                      isActive
                        ? "bg-foreground px-0.5 rounded"
                        : "text-primary rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted/60 px-0.5"
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
              <button className="btn bg-foreground text-popover">Login</button>
            ) : (
              <Avatar src="/broken-image.jpg" className="cursor-pointer" />
            )}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <Menu className="cursor-pointer text-primary" />
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
