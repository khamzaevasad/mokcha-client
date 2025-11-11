import { AnimatePresence, motion } from "framer-motion";
import { navPath, authPath } from "../data/navbar";
import { NavLink } from "react-router-dom";
type ResponsiveMenuProps = {
  open: boolean;
  authMember: boolean | null;
};
function ResponsiveMenu({ open, authMember }: ResponsiveMenuProps) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="font-semibold uppercase bg-base-300 text-base-content py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-2">
              {navPath.map(({ id, to, label }) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline text-blue-500" : ""
                  }
                  key={id}
                  to={to}
                >
                  {label}
                </NavLink>
              ))}

              {authMember
                ? authPath.map(({ id, to, label }) => (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline text-blue-500" : ""
                      }
                      key={id}
                      to={to}
                    >
                      {label}
                    </NavLink>
                  ))
                : null}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
