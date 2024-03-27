import Conversations from "./Conversations";
import LogOut from "./LogOut.jsx";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogOut />
    </div>
  );
};
export default Sidebar;
