import { Link } from "@tanstack/react-router";
import type { IconType } from "react-icons";
import { FaProductHunt } from "react-icons/fa6";

export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route
        Icon={FaProductHunt}
        selected={true}
        title="Dashboard"
        path="/admin"
      />
      <Route
        Icon={FaProductHunt}
        selected={false}
        title="Products"
        path="/admin/products"
      />
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
  path,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
  path: string;
}) => {
  return (
//  activeProps={{ className: "font-bold text-theme-500" }}

    <Link
      to={path}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </Link>
  );
};