import StatCard from "../Components/StatCard";
import TargetCard from "../Components/TargetCard";
import ProductCard from "../Components/ProductCard";
import OrdersTable from "../Components/OrdersTable";
import SalesChart from "../Components/SalesChart";

import { products } from "../Data/productsData";
import { orders } from "../Data/ordersData";

// ICONS
import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiClock
} from "react-icons/fi";

export default function Dashboard() {
  return (
    <>
      {/* Stats */}
      <div className="row mt-4">
        <StatCard
          title="Total Revenue"
          value="$82,650"
          percent={11}
          icon={<FiDollarSign />}
          color="#5fe3c3"
        />

        <StatCard
          title="Total Orders"
          value="1,645"
          percent={11}
          icon={<FiShoppingBag />}
          color="#60a5fa"
        />

        <StatCard
          title="Total Customers"
          value="1,462"
          percent={-17}
          icon={<FiUsers />}
          color="#f87171"
        />

        <StatCard
          title="Pending Orders"
          value="117"
          percent={-9}
          icon={<FiClock />}
          color="#fbbf24"
        />
      </div>

      {/* Chart + Target */}
      <div className="row mt-4">
        <div className="col-md-8">
          <SalesChart />
        </div>

        <div className="col-md-4">
          <TargetCard
            dailyTarget={650}
            monthlyTarget={14500}
            achieved={10200}
          />
        </div>
      </div>

      {/* Products */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold mb-0">Top Selling Products</h5>
              <span className="text-muted">Last 7 days</span>
            </div>

            <div className="row">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
                ))}

            </div>
          </div>
        </div>
      </div>

      {/* Orders */}
      <OrdersTable orders={orders} />
    </>
  );
}
