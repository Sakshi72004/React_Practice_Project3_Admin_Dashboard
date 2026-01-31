export default function TargetCard({
  title = "Sales Target",
  dailyTarget,
  monthlyTarget,
  achieved
}) {
  const progress = Math.min(
    Math.round((achieved / monthlyTarget) * 100),
    100
  );

  const formatNumber = (num) =>
    num.toLocaleString("en-IN");

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <h5 className="fw-semibold mb-4">{title}</h5>

        <div className="d-flex justify-content-between mb-2">
          <span className="text-muted">Daily Target</span>
          <span className="fw-semibold">
            {formatNumber(dailyTarget)}
          </span>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <span className="text-muted">Monthly Target</span>
          <span className="fw-semibold">
            {formatNumber(monthlyTarget)}
          </span>
        </div>

        <div className="mb-2">
          <small className="text-muted">Progress</small>
          <div className="progress mt-2" style={{ height: "10px" }}>
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
                backgroundColor: "#5fe3c3"
              }}
            />
          </div>
        </div>

        <div className="mt-3 d-flex justify-content-between">
          <span className="text-muted">Achieved</span>
          <span className="fw-bold text-success">
            {progress}% ↑
          </span>
        </div>
      </div>
    </div>
  );
}
