export default function StatCard({ title, value, percent, icon, color }) {
  return (
    <div className="col-md-3 mb-4">
      <div
        className="card border-0 shadow-sm"
        style={{ borderRadius: "12px" }}
      >
        <div className="card-body d-flex justify-content-between align-items-center">
          
          <div>
            <p className="text-muted mb-1">{title}</p>
            <h4 className="fw-bold">{value}</h4>
            <small className={percent > 0 ? "text-success" : "text-danger"}>
              {percent > 0 ? "▲" : "▼"} {Math.abs(percent)}%
            </small>
          </div>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: color,
              color: "#fff",
              fontSize: "20px"
            }}
          >
            {icon}
          </div>

        </div>
      </div>
    </div>
  );
}
