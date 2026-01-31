export default function Settings() {
  return (
    <div className="card border-0 shadow-sm p-4">
      <h5 className="fw-bold mb-3">Settings</h5>

      <p className="text-muted mb-4">
        Manage your account and application preferences.
      </p>

      {/* Profile Settings */}
      <div className="mb-4">
        <h6 className="fw-semibold">Profile Settings</h6>

        <div className="row g-3 mt-2">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value="Admin User" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value="admin@example.com"
            />
          </div>
        </div>
      </div>

      {/* App Settings */}
      <div className="mb-4">
        <h6 className="fw-semibold">Application Settings</h6>

        <div className="form-check form-switch mt-3">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">
            Enable Dark Mode
          </label>
        </div>

        <div className="form-check form-switch mt-2">
          <input className="form-check-input" type="checkbox" defaultChecked />
          <label className="form-check-label">
            Email Notifications
          </label>
        </div>
      </div>

      <button className="btn btn-primary px-4">
        Save Changes
      </button>
    </div>
  );
}
