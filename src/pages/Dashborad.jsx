import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "../features/fileSlice";
import UploadFile from "../components/UploadFlie";
import FileList from "../components/FileList";
import SearchFilter from "../components/SearchFilter";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { items, error } = useSelector((s) => s.files);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => { dispatch(fetchFiles()); }, [dispatch]);

  const totalSize = items.reduce((a, f) => a + (f.size || 0), 0);
  const formatTotalSize = (b) => {
    if (b < 1048576)    return `${(b / 1024).toFixed(1)} KB`;
    if (b < 1073741824) return `${(b / 1048576).toFixed(1)} MB`;
    return `${(b / 1073741824).toFixed(1)} GB`;
  };
  const categories = [...new Set(items.map((f) => f.category))].length;

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-mark">⬡</div>
          <span className="logo-text">DocVault</span>
        </div>

        <nav className="sidebar-nav">
          {[["⊞","Dashboard"],["📁","All Files"],["⭐","Starred"],["🕐","Recent"],["🗑","Trash"]].map(([icon, label]) => (
            <a key={label} className={`nav-item ${label === "Dashboard" ? "nav-active" : ""}`} href="#">
              <span className="nav-icon">{icon}</span> {label}
            </a>
          ))}
        </nav>

        <div className="sidebar-divider" />
        <p className="sidebar-section-label">Categories</p>
        <nav className="sidebar-nav">
          {["Personal","Academic","Office","Certificates"].map((cat) => (
            <a className="nav-item" href="#" key={cat}>
              <span className="nav-dot" /> {cat}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="storage-info">
            <span className="storage-label">Storage Used</span>
            <span className="storage-value">{formatTotalSize(totalSize)}</span>
          </div>
          <div className="storage-bar">
            <div className="storage-fill" style={{ width: "34%" }} />
          </div>
          <span className="storage-sub">of 5 GB used</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <h1 className="page-title">Document Manager</h1>
            <span className="page-sub">Manage and organize your files</span>
          </div>
          <div className="topbar-right">
            <button className="refresh-btn" onClick={() => dispatch(fetchFiles())}>↺ Refresh</button>
            <button className="upload-trigger-btn" onClick={() => setShowUpload(true)}>
              <span>+</span> Upload File
            </button>
          </div>
        </header>

        {error && <div className="error-banner">⚠ {error} — Make sure Firebase is configured correctly.</div>}

        <SearchFilter />
        <FileList />
      </main>

      {showUpload && <UploadFile onClose={() => setShowUpload(false)} />}
    </div>
  );
}