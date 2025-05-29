
import { AccountToggle } from "../Dashboard/AccountToggle";
import { RouteSelect } from "./RouteSelect";
import { Search } from "./Search";

export const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-hidden sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <RouteSelect /> 
      </div>
    </div>
  );
};