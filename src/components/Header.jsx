export default function Header({ cartCount, searchQuery, setSearchQuery }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", backgroundColor: "#1e293b", color: "#fff" }}>
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>OmniStore</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: "0.5rem 1rem", borderRadius: "6px", border: "none", width: "260px" }}
      />
      <div style={{ fontWeight: "bold" }}>Cart ({cartCount})</div>
    </header>
  );
}