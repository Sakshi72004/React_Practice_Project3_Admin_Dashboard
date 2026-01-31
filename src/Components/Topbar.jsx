import { FiSun, FiMoon, FiSearch } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      
      {/* Page Title */}
      <h4 className="fw-semibold mb-0">Overview</h4>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">

        {/* Search Bar */}
        <div className="position-relative">
          <FiSearch
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              color: "#999"
            }}
          />
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search..."
            style={{
              width: "240px",
              borderRadius: "10px"
            }}
          />
        </div>

        {/* Theme Toggle */}
        <button
          className="btn btn-outline-secondary rounded-circle"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>

      </div>
    </div>
  );
}
