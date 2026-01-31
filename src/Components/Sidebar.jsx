import { NavLink } from "react-router-dom";

import {
  FiHome,
  FiBarChart2,
  FiBox,
  FiTag,
  FiArchive,
  FiShoppingCart,
  FiTrendingUp,
  FiUsers,
  FiMail,
  FiSettings
} from "react-icons/fi";

const menuItems = [
  { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
  { name: "Analytics", icon: <FiBarChart2 />, path: "/analytics" },
  { name: "Products", icon: <FiBox />, path: "/products" },
  { name: "Offers", icon: <FiTag />, path: "/offers" },
  { name: "Inventory", icon: <FiArchive />, path: "/inventory" },
  { name: "Orders", icon: <FiShoppingCart />, path: "/orders" },
  { name: "Sales", icon: <FiTrendingUp />, path: "/sales" },
  { name: "Customer", icon: <FiUsers />, path: "/customer" },
  { name: "Newsletter", icon: <FiMail />, path: "/newsletter" },
  { name: "Settings", icon: <FiSettings />, path: "/settings" }
];


export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column p-3"
      style={{
        width: "260px",
        minHeight: "100vh",
        backgroundColor: "#eef4f3"
      }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center mb-4">
        <div
          className="rounded-circle d-flex justify-content-center align-items-center me-2"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#5fe3c3",
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          P
        </div>
        <h5 className="mb-0 text-dark">
          Pixel <strong>Commerce</strong>
        </h5>
      </div>

      {/* Menu */}
      <ul className="nav nav-pills flex-column gap-1">
  {menuItems.map((item, index) => (
    <li className="nav-item" key={index}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `nav-link d-flex align-items-center gap-3 ${
            isActive ? "active text-white" : "text-secondary"
          }`
        }
        style={({ isActive }) => ({
          backgroundColor: isActive ? "#5fe3c3" : "transparent",
          borderRadius: "10px"
        })}
      >
        <span style={{ fontSize: "18px" }}>{item.icon}</span>
        {item.name}
      </NavLink>
    </li>
  ))}
</ul>

    </div>
  );
}
