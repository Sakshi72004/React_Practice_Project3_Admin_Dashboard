export default function ProductCard({ product }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card border-0 shadow-sm h-100 product-card">
        
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="fw-semibold">{product.name}</h6>
          <p className="text-muted small mb-1">{product.category}</p>

          <div className="mb-2">
            ⭐ {product.rating}
          </div>

          <h5 className="text-success mb-3">
            ₹{product.price.toLocaleString()}
          </h5>

          <button className="btn btn-warning mt-auto fw-semibold">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}
