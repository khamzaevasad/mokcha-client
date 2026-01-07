import { NavLink } from "react-router-dom";
import { navPath } from "../../data/navbar";
import Basket from "./Basket";
import { LogInIcon, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import LoginSignupModal from "./LoginSignupModal";
import { useApp } from "../../hooks/useApp";
import AvatarDropdown from "./AvatarDropdown";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { authMember } = useApp();

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
            {navPath(!!authMember).map(({ id, to, label }) => (
              <NavLink
                key={id}
                to={to}
                className={({ isActive }) =>
                  `
    relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
    text-primary
    ${
      isActive
        ? "bg-gray-200/90 text-gray-800"
        : "text-gray-600 hover:text-gray-800"
    }
    hover:bg-gray-100/60
    after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2
    after:w-1 after:h-1 after:rounded-full after:bg-primary after:transition-all after:duration-300
    ${
      isActive
        ? "after:opacity-100 after:scale-100"
        : "after:opacity-0 after:scale-0"
    }
    `
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* end */}
          <div className="navbar-end gap-3 text-white text-xl">
            <Basket />
            {!authMember ? (
              <>
                <label
                  htmlFor="login_modal"
                  className="bg-primary text-sm py-1.5 px-3 rounded-2xl transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-xl"
                >
                  <LogInIcon className="text-xs mr-2 hidden md:inline" />
                  Login
                </label>
              </>
            ) : (
              <>
                <AvatarDropdown />
              </>
            )}
            <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="cursor-pointer text-primary" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ResponsiveMenu */}
      <ResponsiveMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <LoginSignupModal id="login_modal" mode="login" />
    </>
  );
}

export default Navbar;
