import { FC } from "react";
import { useApp } from "../../hooks/useApp";

interface LoginSignupModalProps {
  id: string;
  mode: "login" | "signup";
}

const LoginSignupModal: FC<LoginSignupModalProps> = ({ id, mode }) => {
  const {
    handleUserName,
    handleMemberPassword,
    handlePhone,
    handleSignupRequest,
    handleLoginRequest,
    setMemberNick,
    setMemberPassword,
    setMemberPhone,
    memberNick,
    memberPassword,
    memberPhone,
  } = useApp();
  const loginMode = mode === "login";

  //   handlers
  const closeModal = () => {
    const modal = document.getElementById(id) as HTMLInputElement;
    if (modal) modal.checked = false;
  };

  const handleAuthSubmit = async () => {
    if (loginMode) {
      handleLoginRequest();
    } else {
      handleSignupRequest();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAuthSubmit();
    setMemberNick("");
    setMemberPassword("");
    setMemberPhone("");
    closeModal();
  };

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box bg-background/70 backdrop-blur-xl max-w-lg rounded-3xl shadow-2xl border border-white/10 p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
            {loginMode ? "Welcome Back 👋" : "Create an Account ✨"}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-foreground font-medium">
                User Name
              </label>
              <input
                value={memberNick}
                onChange={handleUserName}
                type="text"
                className="text-foreground w-full input rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground"
                placeholder="Your Name"
                required
              />
            </div>
            {!loginMode && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <input
                  value={memberPhone}
                  onChange={handlePhone}
                  type="text"
                  className="text-foreground w-full input rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground"
                  placeholder="010-1234-5678"
                  required
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                Password
              </label>
              <input
                value={memberPassword}
                onChange={handleMemberPassword}
                type="password"
                className="text-foreground w-full input rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-muted-foreground"
                placeholder="Your Password"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-3 bg-accent py-2 rounded-xl text-white text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:opacity-90"
            >
              {loginMode ? "Login" : "Sign Up"}
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
