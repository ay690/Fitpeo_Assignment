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
      <h3 className="hidden text-lg font-bold lg:block">Dashboard</h3>
      <div className="flex flex-col items-stretch gap-4 items lg:flex-row">
        <OverviewCards />
        <NetProfit />
      </div>
      <div className="flex flex-col items-stretch gap-4 lg:flex-row">
        <ActivityCharts />
        <GoalsPopularMenu />
      </div>
      <div className="flex flex-col items-stretch gap-4 items lg:flex-row">
        <RecentOrders />
        <CustomerFeedback />
      </div>
    </div>
  );
};

export default DashboardContent;
