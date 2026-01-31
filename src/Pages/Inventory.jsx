export default function Inventory() {
  return (
    <div className="card border-0 shadow-sm p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold mb-0">Inventory</h4>
        <button className="btn btn-success btn-sm">+ Add Item</button>
      </div>

      <p className="text-muted">
        Manage product stock levels and availability.
      </p>

      <div className="table-responsive mt-3">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Air Jordan 8</td>
              <td>AJ-008</td>
              <td>120</td>
              <td>
                <span className="badge bg-success">In Stock</span>
              </td>
            </tr>

            <tr>
              <td>Nike Air Max</td>
              <td>NK-112</td>
              <td>18</td>
              <td>
                <span className="badge bg-warning">Low Stock</span>
              </td>
            </tr>

            <tr>
              <td>Running Pro</td>
              <td>RP-331</td>
              <td>0</td>
              <td>
                <span className="badge bg-danger">Out of Stock</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
