import { useApp } from "../../hooks/useApp";
import { serverApi } from "../../lib/config";

const AvatarDropdown = () => {
  const { authMember, handleLogoutRequest } = useApp();

  return (
    <div className="dropdown dropdown-end">
      {/* Avatar button */}
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              authMember?.memberImage
                ? `${serverApi}/${authMember.memberImage}`
                : "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
            }
            alt="user avatar"
          />
        </div>
      </label>

      {/* Dropdown menu */}
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact bg-card dropdown-content rounded-box w-40"
      >
        <li>
          <button className="text-foreground" onClick={handleLogoutRequest}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AvatarDropdown;
