import { AnimatePresence, motion } from "framer-motion";
import { navPath } from "../../data/navbar";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useApp } from "../../hooks/useApp";
import { X } from "lucide-react";

type ResponsiveMenuProps = {
  open: boolean;
  onClose: () => void;
};

function ResponsiveMenu({ open, onClose }: ResponsiveMenuProps) {
  const { authMember } = useApp();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Menu</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-6 px-4">
              <ul className="space-y-2">
                {navPath(!!authMember).map(({ id, to, label }, index) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `
    flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-medium transition-all duration-200
    ${
      isActive
        ? "bg-primary text-white shadow-lg shadow-primary/30"
        : "text-gray-700 hover:bg-gray-50 hover:text-primary"
    }
    `
                      }
                    >
                      <span>{label}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  {authMember
                    ? `Welcome, ${authMember.memberNick}`
                    : "Guest User"}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
