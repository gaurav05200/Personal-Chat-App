import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogOut.js";
const LogOut = () => {
  const { loading, logout } = useLogOut();
  return (
    <div>
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogOut;
