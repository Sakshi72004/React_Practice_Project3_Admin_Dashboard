import { useState } from "react";
import OrdersTable from "../Components/OrdersTable";
import Pagination from "../Components/Pagination";
import { orders } from "../Data/ordersData";

export default function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 4;

  // pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  return (
    <>
      <h4 className="fw-semibold mb-4">Orders</h4>

      <OrdersTable orders={currentOrders} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
