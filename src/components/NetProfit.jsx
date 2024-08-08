import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const NetProfit = () => {
  const data = [{ value: 70 }, { value: 30 }];

  return (
    <div className="w-full p-4 bg-gray-700 rounded-lg sm:max-w-sm lg:max-w-[350px]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start gap-2">
          <h3 className="text text-md">Net Profit</h3>
          <h2 className="text-2xl font-bold">$ 6759.25</h2>
          <h3 className="text-green-400">▲ 3%</h3>
        </div>
        <div className="relative">
          <PieChart width={95} height={95}>
            <Pie
              data={data}
              cx={45}
              cy={45}
              innerRadius={30}
              outerRadius={40}
              startAngle={90}
              endAngle={450}
              dataKey="value"
            >
              <Cell key="filled" fill="#3457D5" />
              <Cell key="unfilled" fill="#72A0C1" />
            </Pie>
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-white">
            <span className="text-sm">70%</span>
            <span className="text-[5px]">Goals Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetProfit;
