import { FC } from "react";

interface LoginSignupModalProps {
  id: string;
  mode: "login" | "signup";
}

const LoginSignupModal: FC<LoginSignupModalProps> = ({ id, mode }) => {
  const isLogin = mode === "login";

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box bg-background/70 backdrop-blur-xl max-w-lg rounded-3xl shadow-2xl border border-white/10 p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
            {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
          </h2>

          <form className="flex flex-col gap-5">
            {!isLogin && (
              <div className="flex flex-col gap-2">
                <label className="text-sm text-foreground font-medium">
                  User Name
                </label>
                <input
                  type="text"
                  className="w-full input rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground"
                  placeholder="Your Name"
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full input rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground"
                placeholder="010-1234-5678"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Password
              </label>
              <input
                type="password"
                className="w-full input rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground"
                placeholder="Your Password"
              />
            </div>

            <button
              type="button"
              className="mt-3 bg-accent py-2 rounded-xl text-white text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:opacity-90"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>

        <label
          className="modal-backdrop cursor-pointer backdrop-blur-sm"
          htmlFor={id}
        ></label>
      </div>
    </>
  );
};

export default LoginSignupModal;
