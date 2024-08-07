import React from "react";
import {
  OverviewCards,
  ActivityCharts,
  GoalsPopularMenu,
  RecentOrders,
  CustomerFeedback,
} from "./index";

const DashboardContent = () => {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <OverviewCards />
      <div className="flex items-center gap-3">
        <ActivityCharts />
        <GoalsPopularMenu />
      </div>
      <div className="flex gap-2" >
        <RecentOrders />
        <CustomerFeedback />
      </div>
    </div>
  );
};

export default DashboardContent;
