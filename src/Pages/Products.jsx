import ProductCard from "../Components/ProductCard";
import { products } from "../Data/productsData";

export default function Products() {
  return (
    <>
      <h4 className="fw-semibold mb-4">Products</h4>

      <div className="row g-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
