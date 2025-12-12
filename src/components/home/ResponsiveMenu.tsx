import { AnimatePresence, motion } from "framer-motion";
import { navPath } from "../../data/navbar";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useApp } from "../../hooks/useApp";
type ResponsiveMenuProps = {
  open: boolean;
};
function ResponsiveMenu({ open }: ResponsiveMenuProps) {
  const { authMember } = useApp();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-20 left-0 w-full h-screen z-20"
        >
          <div className="font-semibold uppercase bg-card text-foreground py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-2">
              {navPath(!!authMember).map(({ id, to, label }) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "underline" : "text-primary"
                  }
                  key={id}
                  to={to}
                >
                  {label}
                </NavLink>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
