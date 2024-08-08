import React from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="flex flex-col items-stretch gap-4 lg:flex-row"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OverviewCards />
        <NetProfit />
      </motion.div>
      <motion.div
        className="flex flex-col items-stretch gap-4 lg:flex-row"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ActivityCharts />
        <GoalsPopularMenu />
      </motion.div>
      <motion.div
        className="flex flex-col items-stretch gap-4 lg:flex-row"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <RecentOrders />
        <CustomerFeedback />
      </motion.div>
    </div>
  );
};

export default DashboardContent;
