import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { salesData } from "../Data/dummyData";

export default function SalesChart() {
  return (
    <div className="card border-0 shadow-sm mt-4">
      <div className="card-body">
        
        <div className="d-flex justify-content-between mb-3">
          <h5 className="fw-semibold">Sales Analytics</h5>
          <small className="text-muted">Last 7 days</small>
        </div>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart data={salesData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#5fe3c3"
                fill="#5fe3c3"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
