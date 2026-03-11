import AddProductForm from "./components/AddProductForm";
import ProductTable from "./components/ProductTable";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <header style={{
        borderBottom: "1px solid var(--border)",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        background: "var(--surface)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "var(--amber)", fontSize: "18px" }}>◈</span>
          <span style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "16px", letterSpacing: "0.1em" }}>
            INVENTORY
          </span>
          <span style={{ color: "var(--text-muted)", fontSize: "12px", fontFamily: "var(--font-mono)" }}>
            / tracker
          </span>
        </div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 40px" }}>
        <div style={{ marginBottom: "28px" }}>
          <h1 style={{ fontFamily: "var(--font-head)", fontSize: "28px", fontWeight: 800, letterSpacing: "0.03em", marginBottom: "4px" }}>
            Stock Dashboard
          </h1>
        </div>

        <AddProductForm />
        <ProductTable />
      </main>
    </div>
  );
}