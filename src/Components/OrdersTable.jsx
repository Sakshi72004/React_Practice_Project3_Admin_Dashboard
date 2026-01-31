import { useState } from "react";

export default function OrdersTable({ orders }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const getStatusBadge = (status) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Pending":
        return "warning";
      case "Cancelled":
        return "danger";
      default:
        return "secondary";
    }
  };

  // 🔍 Filter logic
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="card border-0 shadow-sm mt-4">
      <div className="card-body">

        {/* Header + Controls */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">Recent Orders</h5>

          <div className="d-flex gap-2">
            {/* Search */}
            <input
              type="text"
              className="form-control"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "220px" }}
            />

            {/* Status Filter */}
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ width: "160px" }}
            >
              <option value="All">All</option>
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => (
                  <tr key={index}>
                    <td className="fw-semibold">{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td className="fw-semibold text-success">
                      ₹{order.amount.toLocaleString()}
                    </td>
                    <td>
                      <span
                        className={`badge bg-${getStatusBadge(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="text-muted">{order.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-3">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
