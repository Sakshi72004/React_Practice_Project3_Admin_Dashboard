export default function Newsletter() {
  return (
    <div className="card border-0 shadow-sm p-4">
      <h5 className="fw-bold mb-3">Newsletter</h5>

      <p className="text-muted mb-4">
        Manage newsletter subscriptions and send updates to users.
      </p>

      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Email Subject</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter subject"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Target Audience</label>
          <select className="form-select">
            <option>All Users</option>
            <option>Active Customers</option>
            <option>Subscribed Users</option>
          </select>
        </div>

        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea
            rows="4"
            className="form-control"
            placeholder="Write your newsletter content..."
          ></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-success px-4">
            Send Newsletter
          </button>
        </div>
      </form>
    </div>
  );
}
