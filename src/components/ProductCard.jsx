export default function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1rem", backgroundColor: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <img src={product.image} alt={product.name} style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "6px" }} />
        <span style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase" }}>{product.category}</span>
        <h3 style={{ margin: "0.4rem 0", fontSize: "1.1rem" }}>{product.name}</h3>
        <p style={{ margin: "0.25rem 0", color: "#f59e0b", fontWeight: "bold" }}>★ {product.rating}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
        <span style={{ fontSize: "1.15rem", fontWeight: "bold" }}>{product.price.toLocaleString("en-IN", {style: "currency", currency: "INR"})}</span>
        <button
          onClick={() => onAddToCart(product)}
          style={{ padding: "0.5rem 0.9rem", backgroundColor: "#2563eb", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}