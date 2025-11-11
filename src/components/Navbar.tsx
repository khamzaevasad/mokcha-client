import { Avatar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

function Navbar() {
  const authMember = true;
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-md bg-black/20">
      <div className="align-elements navbar">
        <div className="navbar-start">
          <NavLink to="/">
            <h3 className="text-2xl font-bold text-white">MOKCHA</h3>
          </NavLink>
        </div>

        <div className="navbar-end gap-7 text-white text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-[#1b76d2] p-1 rounded" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-[#1b76d2] p-1 rounded" : ""
            }
            to="/products"
          >
            Products
          </NavLink>

          {authMember ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-[#1b76d2] p-1 rounded" : ""
                }
                to="/orders"
              >
                Orders
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-[#1b76d2] p-1 rounded" : ""
                }
                to="/member-page"
              >
                My Page
              </NavLink>
            </>
          ) : null}

          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-[#1b76d2] p-1 rounded" : ""
            }
            to="/help"
          >
            Help
          </NavLink>

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
