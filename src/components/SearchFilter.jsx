        import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setFilterCategory, setFilterType } from "../features/fileSlice";

const CATEGORIES = ["All", "Personal", "Academic", "Office", "Certificates", "Reports", "Other"];
const TYPES      = ["All", "PDF", "Image", "Other"];

export default function SearchFilter() {
  const dispatch = useDispatch();
  const { searchQuery, filterCategory, filterType } = useSelector((s) => s.files);

  return (
    <div className="search-filter-bar">
      <div className="search-wrap">
        <span className="search-icon">⌕</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search files by name, type…"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        {searchQuery && <button className="clear-search" onClick={() => dispatch(setSearchQuery(""))}>✕</button>}
      </div>

      <div className="filter-group">
        <span className="filter-label">Category</span>
        {CATEGORIES.map((cat) => (
          <button key={cat} className={`filter-chip ${filterCategory === cat ? "filter-chip-active" : ""}`} onClick={() => dispatch(setFilterCategory(cat))}>
            {cat}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <span className="filter-label">Type</span>
        {TYPES.map((t) => (
          <button key={t} className={`filter-chip ${filterType === t ? "filter-chip-active" : ""}`} onClick={() => dispatch(setFilterType(t))}>
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}