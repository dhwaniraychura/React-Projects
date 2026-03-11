import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../features/inventory/inventoryThunks";

const categories = ["Electronics", "Clothing", "Food", "Tools", "Other"];

const inputStyle = {
  background: "var(--surface2)",
  border: "1px solid var(--border2)",
  borderRadius: "8px",
  color: "var(--text)",
  fontFamily: "var(--font-mono)",
  fontSize: "13px",
  padding: "10px 14px",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function AddProductForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", category: "", stock: "", price: "" });
  const [focused, setFocused] = useState(null);
  const [adding, setAdding] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.category || !form.stock || !form.price) return;
    setAdding(true);
    await dispatch(addProduct({ ...form, stock: Number(form.stock), price: Number(form.price) }));
    await dispatch(fetchProducts());
    setForm({ name: "", category: "", stock: "", price: "" });
    setAdding(false);
  };

  const fields = [
    { name: "name", label: "Product Name", type: "text", placeholder: "e.g. MacBook Pro" },
    { name: "stock", label: "Stock Qty", type: "number", placeholder: "0" },
    { name: "price", label: "Unit Price ($)", type: "number", placeholder: "0.00" },
  ];

  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "12px",
      padding: "24px",
      marginBottom: "20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <span style={{ color: "var(--amber)", fontSize: "14px" }}>◈</span>
        <h2 style={{ fontFamily: "var(--font-head)", fontSize: "16px", fontWeight: 700, letterSpacing: "0.05em" }}>
          ADD PRODUCT
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr auto", gap: "12px", alignItems: "end" }}>
        {fields.map((field) => (
          <div key={field.name}>
            <label style={{ display: "block", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              placeholder={field.placeholder}
              onChange={handleChange}
              onFocus={() => setFocused(field.name)}
              onBlur={() => setFocused(null)}
              style={{
                ...inputStyle,
                borderColor: focused === field.name ? "var(--amber)" : "var(--border2)",
                boxShadow: focused === field.name ? "0 0 0 3px var(--amber-glow)" : "none",
              }}
            />
          </div>
        ))}

        <div>
          <label style={{ display: "block", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
            Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            onFocus={() => setFocused("category")}
            onBlur={() => setFocused(null)}
            style={{
              ...inputStyle,
              borderColor: focused === "category" ? "var(--amber)" : "var(--border2)",
              boxShadow: focused === "category" ? "0 0 0 3px var(--amber-glow)" : "none",
              cursor: "pointer",
            }}
          >
            <option value="" disabled>Select...</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          disabled={adding}
          style={{
            background: adding ? "var(--amber-dim)" : "var(--amber)",
            color: "#0d0f14",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            fontFamily: "var(--font-head)",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.05em",
            cursor: adding ? "not-allowed" : "pointer",
            transition: "background 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          {adding ? "Adding..." : "+ Add"}
        </button>
      </div>
    </div>
  );
}