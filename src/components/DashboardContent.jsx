import React from "react";
import { OverviewCards, ActivityCharts, GoalsPopularMenu } from "./index";

const DashboardContent = () => {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <OverviewCards />
      <div className="flex items-center gap-3">
        <ActivityCharts />
        <GoalsPopularMenu />
      </div>
    </div>
  );
};

export default DashboardContent;
