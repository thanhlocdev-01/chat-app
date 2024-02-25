import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      {/* <Conversation />
      <LogoutButton /> */}
    </div>
  );
};

export default Sidebar;
