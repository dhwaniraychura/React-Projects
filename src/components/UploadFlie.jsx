import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../features/fileSlice";

const CATEGORIES = ["Personal", "Academic", "Office", "Certificates", "Reports", "Other"];

const getFileIcon = (type) => {
  if (!type) return "📄";
  if (type.includes("pdf")) return "📕";
  if (type.startsWith("image/")) return "🖼️";
  if (type.includes("word") || type.includes("document")) return "📝";
  if (type.includes("sheet") || type.includes("excel")) return "📊";
  return "📁";
};

export default function UploadFile({ onClose }) {
  const dispatch = useDispatch();
  const { uploading, uploadProgress } = useSelector((s) => s.files);
  const [dragOver, setDragOver]       = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory]       = useState("Personal");
  const [description, setDescription] = useState("");
  const [done, setDone]               = useState(false);
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const result = await dispatch(uploadFile({ file: selectedFile, category, description }));
    if (!result.error) {
      setDone(true);
      setTimeout(() => { setDone(false); onClose?.(); }, 1400);
    }
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  return (
    <div className="upload-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className="upload-modal">
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-icon">⬆</span>
            <h2>Upload Document</h2>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            className={`drop-zone ${dragOver ? "drag-active" : ""} ${selectedFile ? "has-file" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => !selectedFile && inputRef.current?.click()}
          >
            <input
              ref={inputRef}
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            {selectedFile ? (
              <div className="file-preview-info">
                <div className="file-icon-big">{getFileIcon(selectedFile.type)}</div>
                <div className="file-meta">
                  <span className="file-preview-name">{selectedFile.name}</span>
                  <span className="file-preview-size">{formatSize(selectedFile.size)}</span>
                </div>
                <button type="button" className="remove-file-btn" onClick={() => setSelectedFile(null)}>
                  Remove
                </button>
              </div>
            ) : (
              <div className="drop-placeholder">
                <div className="drop-icon">☁</div>
                <p className="drop-text">Drop your file here</p>
                <p className="drop-sub">or <span>browse files</span></p>
                <p className="drop-formats">PDF, Images, DOCX, XLSX, and more</p>
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Category</label>
            <div className="category-chips">
              {CATEGORIES.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  className={`chip ${category === cat ? "chip-active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Description <span className="optional">(optional)</span></label>
            <textarea
              className="form-textarea"
              placeholder="Add a short description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
            />
          </div>

          {uploading && (
            <div className="progress-wrap">
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${uploadProgress}%` }} />
              </div>
              <span className="progress-pct">{uploadProgress}%</span>
            </div>
          )}

          <button
            type="submit"
            className={`upload-btn ${done ? "upload-btn-done" : ""}`}
            disabled={!selectedFile || uploading}
          >
            {done ? "✓ Uploaded!" : uploading ? `Uploading ${uploadProgress}%…` : "Upload File"}
          </button>
        </form>
      </div>
    </div>
  );
}