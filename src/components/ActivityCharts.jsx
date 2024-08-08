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

import { data } from "../constants/ActivityCharts";

const ActivityCharts = () => {
  const [selectedWeek, setSelectedWeek] = useState("weekly");

  return (
    <div className="w-full p-4 bg-gray-800 rounded-lg lg:w-3/4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl text-white">Activity</h3>
        <div>
          <select
            id="week-selector"
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="p-2 text-white bg-gray-700 border border-gray-600 rounded"
          >
            <option value="weekly">Weekly</option>
          </select>
        </div>
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
    </div>
  );
};

export default ActivityCharts;
