import { NavLink } from "react-router-dom";
import LoginSignupModal from "./LoginSignupModal";
import { useApp } from "../../hooks/useApp";

function Signup() {
  const { authMember } = useApp();

  return (
    <>
      <div className="flex items-center justify-center gap-6 mt-10">
        {authMember ? (
          <NavLink
            className="my-4 py-2 px-9 bg-accent rounded-2xl transition-all duration-200 hover:scale-110"
            to="/products"
          >
            Explore the Menu
          </NavLink>
        ) : (
          <>
            <NavLink
              className="my-4 py-2 px-9 bg-accent rounded-2xl transition-all duration-200 hover:scale-110"
              to="/products"
            >
              Explore the Menu
            </NavLink>
            {/* The button to open modal */}
            <label
              htmlFor="signup_modal"
              className="py-2 px-9 border border-white bg-background/20 backdrop-blur-lg rounded-2xl transition-all duration-200 hover:scale-110"
            >
              Join the Table 🍽️
            </label>

            <LoginSignupModal id="signup_modal" mode="signup" />
          </>
        )}
      </div>
    </>
  );
}

export default Signup;
