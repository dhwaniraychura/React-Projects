import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFile, updateFileMetadata } from "../features/fileSlice";

const CATEGORIES = ["Personal", "Academic", "Office", "Certificates", "Reports", "Other"];

const getFileIcon = (type) => {
  if (!type) return "📄";
  if (type.includes("pdf")) return "📕";
  if (type.startsWith("image/")) return "🖼️";
  if (type.includes("word") || type.includes("document")) return "📝";
  if (type.includes("sheet") || type.includes("excel")) return "📊";
  return "📁";
};

const getCategoryColor = (cat) => ({
  Personal: "#6ee7b7", Academic: "#93c5fd", Office: "#fbbf24",
  Certificates: "#f472b6", Reports: "#a78bfa", Other: "#94a3b8",
}[cat] || "#94a3b8");

const formatSize = (bytes) => {
  if (!bytes) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
};

const formatDate = (iso) => {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

export default function FileCard({ file }) {
  const dispatch = useDispatch();
  const [editing, setEditing]           = useState(false);
  const [deleting, setDeleting]         = useState(false);
  const [editTitle, setEditTitle]       = useState(file.title || file.name);
  const [editCategory, setEditCategory] = useState(file.category || "Personal");
  const [editDesc, setEditDesc]         = useState(file.description || "");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleSave = () => {
    dispatch(updateFileMetadata({ id: file.id, updates: { title: editTitle, category: editCategory, description: editDesc } }));
    setEditing(false);
  };

  const handleDelete = async () => {
    setDeleting(true);
    await dispatch(deleteFile(file));
    setDeleting(false);
  };

  return (
    <div className={`file-card ${deleting ? "card-deleting" : ""}`}>
      <div className="card-accent" style={{ background: getCategoryColor(file.category) }} />
      <div className="card-body">
        <div className="card-top">
          <div className="card-file-icon">{getFileIcon(file.type)}</div>
          <span className="card-category-badge" style={{
            color: getCategoryColor(file.category),
            borderColor: getCategoryColor(file.category) + "44",
            background: getCategoryColor(file.category) + "18"
          }}>
            {file.category}
          </span>
        </div>

        {editing ? (
          <input className="edit-input" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} autoFocus />
        ) : (
          <h3 className="card-title" title={file.title || file.name}>{file.title || file.name}</h3>
        )}

        {editing ? (
          <textarea className="edit-textarea" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} placeholder="Description..." rows={2} />
        ) : (
          <p className="card-desc">{file.description || <span className="no-desc">No description</span>}</p>
        )}

        {editing && (
          <select className="edit-select" value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        )}

        <div className="card-meta">
          <span className="meta-item"><span className="meta-icon">📅</span>{formatDate(file.uploadDate)}</span>
          <span className="meta-item"><span className="meta-icon">💾</span>{formatSize(file.size)}</span>
        </div>

        <div className="card-actions">
          {editing ? (
            <>
              <button className="btn-save" onClick={handleSave}>Save</button>
              <button className="btn-cancel" onClick={() => setEditing(false)}>Cancel</button>
            </>
          ) : confirmDelete ? (
            <>
              <button className="btn-confirm-delete" onClick={handleDelete} disabled={deleting}>
                {deleting ? "Deleting…" : "Confirm Delete"}
              </button>
              <button className="btn-cancel" onClick={() => setConfirmDelete(false)}>Cancel</button>
            </>
          ) : (
            <>
              <a href={file.downloadURL} target="_blank" rel="noopener noreferrer" className="btn-download">↓ Download</a>
              <button className="btn-edit" onClick={() => setEditing(true)}>✏ Edit</button>
              <button className="btn-delete" onClick={() => setConfirmDelete(true)}>🗑</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}