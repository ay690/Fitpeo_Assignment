import { PiGreaterThanBold } from "react-icons/pi";
import { colorMap } from "../constants/GoalPopularMenu";

const MenuItem = ({ icon: Icon, color, label }) => {
  const bgColorClass = colorMap[color] || "bg-gray-500";
  return (
    <div className="flex items-center justify-between hover:cursor-pointer">
      <div className="flex items-center gap-2">
        <div className={`${bgColorClass} p-2 md:p-3 rounded-full`}>
          <Icon className="text-white" size="1.5em" />
        </div>
        <h3 className="text-sm text-white md:text-base lg:text-lg">{label}</h3>
      </div>
      <div className="p-2 bg-gray-500 rounded-full md:p-3">
        <PiGreaterThanBold size={12} />
      </div>
    </div>
  );
};

export default MenuItem;
