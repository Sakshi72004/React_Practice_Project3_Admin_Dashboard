import { useState } from "react";
import { customersData } from "../Data/customersData";

export default function Customers() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredCustomers = customersData.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || customer.status === status;

    return matchesSearch && matchesStatus;
  });

  const statusBadge = (status) =>
    status === "Active" ? "success" : "secondary";

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold mb-0">Customers</h4>

          <div className="d-flex gap-2">
            <input
              className="form-control"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td className="fw-semibold">{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.orders}</td>
                  <td>
                    <span
                      className={`badge bg-${statusBadge(
                        customer.status
                      )}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="text-muted">{customer.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredCustomers.length === 0 && (
            <p className="text-center text-muted mt-3">
              No customers found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
