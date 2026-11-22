import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>No products match your search.</p>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem", padding: "2rem" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}