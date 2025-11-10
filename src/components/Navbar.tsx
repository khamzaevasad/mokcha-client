import { Avatar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

function Navbar() {
  const authMember = null;
  return (
    <nav className="navbar align-elements">
      <div className="navbar-start">
        <NavLink to="/">
          <h3 className="text-2xl font-bold">Nusret</h3>
        </NavLink>
      </div>

      <div className="navbar-end gap-7">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 hover:underline underline"
              : " transition duration-300 ease-in-out text-slate-800"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-slate-800 hover:underline underline"
              : " transition duration-300 ease-in-out text-slate-800"
          }
          to="/products"
        >
          Products
        </NavLink>

        {authMember ? (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-800 hover:underline underline"
                  : " transition duration-300 ease-in-out text-slate-800"
              }
              to="/orders"
            >
              Orders
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-800 hover:underline underline"
                  : " transition duration-300 ease-in-out text-slate-800"
              }
              to="/member-page"
            >
              My Page
            </NavLink>
          </>
        ) : null}

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-slate-800  underline"
              : "hover:underline transition duration-300 ease-in-out text-slate-800"
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
          <Avatar src="/broken-image.jpg" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
