import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { data } from "../constants/ActivityCharts";

const ActivityCharts = () => {
  const [selectedWeek, setSelectedWeek] = useState("weekly");

  return (
    <motion.div
      className="w-full p-4 bg-gray-800 rounded-lg lg:w-3/4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.h3
          className="text-xl text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Activity
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <select
            id="week-selector"
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="p-2 text-white bg-gray-700 border border-gray-600 rounded"
          >
            <option value="weekly">Weekly</option>
          </select>
        </motion.div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data[selectedWeek]}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="uv"
            fill="#3457D5"
            barSize={15}
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ActivityCharts;
