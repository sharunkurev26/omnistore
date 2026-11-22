
import { useState } from "react";
import { products } from "./data/products";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <Header cartCount={cartCount} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <ProductGrid products={filteredProducts} onAddToCart={() => setCartCount((c) => c + 1)} />
      </main>
    </div>
  );
}