import { offersData } from "../Data/offersData";

export default function Offers() {
  const badgeColor = (status) =>
    status === "Active" ? "success" : "secondary";

  return (
    <div>
      {/* Page Title */}
      <h4 className="fw-bold mb-4">Offers & Discounts</h4>

      {/* Offer Cards */}
      <div className="row g-3">
        {offersData.map((offer) => (
          <div className="col-md-3" key={offer.id}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-bold mb-0">{offer.title}</h6>
                  <span
                    className={`badge bg-${badgeColor(
                      offer.status
                    )}`}
                  >
                    {offer.status}
                  </span>
                </div>

                <h2 className="fw-bold text-success mb-2">
                  {offer.discount}% OFF
                </h2>

                <p className="text-muted mb-0">
                  Valid till: {offer.validTill}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {offersData.length === 0 && (
        <p className="text-center text-muted mt-4">
          No offers available
        </p>
      )}
    </div>
  );
}
