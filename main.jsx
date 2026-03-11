import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../features/inventory/inventoryThunks";
import EditProductModal from "./EditProductModal";

const LOW_STOCK = 10;

const categoryColors = {
  Electronics: "#3b82f6",
  Clothing: "#8b5cf6",
  Food: "#22c55e",
  Tools: "#f59e0b",
  Other: "#6b7280",
};

export default function ProductTable() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.inventory);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => { dispatch(fetchProducts()); }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteProduct(id));
  };

  const filtered = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "stock") return a.stock - b.stock;
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });

  return (
    <>
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "18px 24px", borderBottom: "1px solid var(--border)",
          background: "var(--surface2)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "var(--amber)" }}>⬡</span>
            <h2 style={{ fontFamily: "var(--font-head)", fontSize: "16px", fontWeight: 700, letterSpacing: "0.05em" }}>INVENTORY</h2>
            <span style={{
              background: "var(--amber-glow)", color: "var(--amber)",
              border: "1px solid var(--amber-dim)", borderRadius: "20px",
              fontSize: "11px", padding: "2px 10px",
            }}>{filtered.length}</span>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: "var(--surface)", border: "1px solid var(--border2)",
                borderRadius: "6px", color: "var(--text-dim)", fontFamily: "var(--font-mono)",
                fontSize: "12px", padding: "6px 10px", cursor: "pointer", outline: "none",
              }}
            >
              <option value="name">Sort: Name</option>
              <option value="stock">Sort: Stock</option>
              <option value="price">Sort: Price</option>
            </select>

            <input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: "var(--surface)", border: "1px solid var(--border2)",
                borderRadius: "6px", color: "var(--text)", fontFamily: "var(--font-mono)",
                fontSize: "12px", padding: "6px 12px", outline: "none", width: "200px",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--amber)"}
              onBlur={(e) => e.target.style.borderColor = "var(--border2)"}
            />
          </div>
        </div>

        {loading ? (
          <div style={{ padding: "60px", textAlign: "center", color: "var(--text-muted)", fontSize: "13px", letterSpacing: "0.1em" }}>
            LOADING...
          </div>
        ) : error ? (
          <div style={{ padding: "40px", textAlign: "center", color: "var(--red)", fontSize: "13px" }}>
            Error: {error}
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--surface2)" }}>
                {["Product Name", "Category", "Stock", "Price", "Status", "Actions"].map((h) => (
                  <th key={h} style={{
                    padding: "12px 20px", textAlign: "left",
                    fontSize: "10px", color: "var(--text-muted)",
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    fontWeight: 500, borderBottom: "1px solid var(--border)",
                    fontFamily: "var(--font-mono)",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: "60px", textAlign: "center", color: "var(--text-muted)", fontSize: "13px" }}>
                    No products found.
                  </td>
                </tr>
              ) : (
                filtered.map((product) => (
                  <tr key={product.id} style={{ borderBottom: "1px solid var(--border)", transition: "background 0.15s" }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "var(--surface2)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-head)", fontWeight: 600, fontSize: "14px" }}>
                      {product.name}
                    </td>
                    <td style={{ padding: "14px 20px" }}>
                      <span style={{
                        background: `${categoryColors[product.category] || "#6b7280"}18`,
                        color: categoryColors[product.category] || "#6b7280",
                        border: `1px solid ${categoryColors[product.category] || "#6b7280"}40`,
                        borderRadius: "6px", fontSize: "11px", padding: "3px 10px",
                        fontFamily: "var(--font-mono)", letterSpacing: "0.05em",
                      }}>{product.category}</span>
                    </td>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-mono)", fontSize: "14px", color: product.stock < LOW_STOCK ? "var(--red)" : "var(--text)" }}>
                      {product.stock}
                    </td>
                    <td style={{ padding: "14px 20px", fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--amber)" }}>
                      ${Number(product.price).toFixed(2)}
                    </td>
                    <td style={{ padding: "14px 20px" }}>
                      {product.stock < LOW_STOCK ? (
                        <span style={{
                          background: "rgba(239,68,68,0.1)", color: "var(--red)",
                          border: "1px solid rgba(239,68,68,0.3)", borderRadius: "6px",
                          fontSize: "11px", padding: "3px 10px",
                        }}>⚠ Low Stock</span>
                      ) : (
                        <span style={{
                          background: "rgba(34,197,94,0.08)", color: "var(--green)",
                          border: "1px solid rgba(34,197,94,0.25)", borderRadius: "6px",
                          fontSize: "11px", padding: "3px 10px",
                        }}>✓ In Stock</span>
                      )}
                    </td>
                    <td style={{ padding: "14px 20px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button onClick={() => { setSelectedProduct(product); setEditOpen(true); }} style={{
                          background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)",
                          borderRadius: "6px", color: "var(--amber)", fontSize: "12px", padding: "5px 12px",
                          cursor: "pointer", fontFamily: "var(--font-mono)", transition: "background 0.2s",
                        }}
                          onMouseEnter={(e) => e.target.style.background = "rgba(245,158,11,0.18)"}
                          onMouseLeave={(e) => e.target.style.background = "rgba(245,158,11,0.08)"}
                        >Edit</button>
                        <button onClick={() => {
                          if (window.confirm(`Delete "${product.name}"?`)) {
                            handleDelete(product.id);
                          }
                        }} style={{
                          background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)",
                          borderRadius: "6px", color: "var(--red)", fontSize: "12px", padding: "5px 12px",
                          cursor: "pointer", fontFamily: "var(--font-mono)", transition: "background 0.2s",
                        }}
                          onMouseEnter={(e) => e.target.style.background = "rgba(239,68,68,0.15)"}
                          onMouseLeave={(e) => e.target.style.background = "rgba(239,68,68,0.06)"}
                        >Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>

      <EditProductModal open={editOpen} onClose={() => setEditOpen(false)} product={selectedProduct} />
    </>
  );
}