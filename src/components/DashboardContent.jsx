import React from "react";
import { OverviewCards, ActivityCharts } from "./index";

const DashboardContent = () => {
  return (
    <div className="p-4 flex flex-col space-y-4">
      <OverviewCards />
      <div>
        <ActivityCharts />
      </div>
    </div>
  );
};

export default DashboardContent;
