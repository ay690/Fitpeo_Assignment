import React from "react";
import {
  OverviewCards,
  ActivityCharts,
  GoalsPopularMenu,
  RecentOrders,
} from "./index";

const DashboardContent = () => {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <OverviewCards />
      <div className="flex items-center gap-3">
        <ActivityCharts />
        <GoalsPopularMenu />
      </div>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-3">
        <RecentOrders />
      </div>
    </div>
  );
};

export default DashboardContent;
