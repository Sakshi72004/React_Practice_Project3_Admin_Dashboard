import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { salesData } from "../Data/salesData";

export default function Sales() {
  return (
    <div>
      {/* Page Title */}
      <h4 className="fw-bold mb-4">Sales Overview</h4>

      {/* KPI Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Total Revenue</h6>
              <h4 className="fw-bold">₹2,18,000</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Total Orders</h6>
              <h4 className="fw-bold">848</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h6 className="text-muted">Growth</h6>
              <h4 className="fw-bold text-success">+18%</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="fw-bold mb-3">Monthly Revenue</h6>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#5fe3c3"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
