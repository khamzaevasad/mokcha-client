import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { navPath, authPath } from "../data/navbar";
import Basket from "./Basket";
import { LogInIcon, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const authMember = false;
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
            : "bg-background/80 backdrop-blur-md border-b border-transparent"
        }`}
      >
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
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-120 hover:bg-muted/60 text-primary bg-primary/10"
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
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-120 hover:bg-muted/60 text-primary bg-primary/10"
                    key={id}
                    to={to}
                  >
                    {label}
                  </NavLink>
                ))
              : null}
          </div>

          {/* end */}
          <div className="navbar-end gap-3 text-white text-xl">
            <Basket />
            {!authMember ? (
              <button className="bg-primary text-sm py-1.5 px-3 rounded-2xl transition-all duration-200 cursor-pointer hover:scale-120 hover:shadow-xl">
                <LogInIcon className="text-xs mr-2 hidden md:inline" />
                Login
              </button>
            ) : (
              <Avatar src="/broken-image.jpg" className="cursor-pointer" />
            )}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <Menu className="cursor-pointer text-primary" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ResponsiveMenu */}
      <ResponsiveMenu open={open} authMember={authMember} />
    </>
  );
}

export default Navbar;
