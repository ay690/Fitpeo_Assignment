import React from "react";
import {
  OverviewCards,
  ActivityCharts,
  GoalsPopularMenu,
  RecentOrders,
  CustomerFeedback,
  NetProfit,
} from "./index";

const DashboardContent = () => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="flex-col sm:gap-5 lg:flex lg:flex-row">
        <OverviewCards />
        <NetProfit />
      </div>
      <div className="flex items-center gap-3">
        <ActivityCharts />
        <GoalsPopularMenu />
      </div>
      <div className="flex gap-2">
        <RecentOrders />
        <CustomerFeedback />
      </div>
    </div>
  );
};

export default DashboardContent;
