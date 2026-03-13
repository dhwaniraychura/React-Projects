import { useSelector } from "react-redux";
import { selectFilteredFiles } from "../features/fileSlice";
import FileCard from "./FileCard";

export default function FileList() {
  const files   = useSelector(selectFilteredFiles);
  const { loading } = useSelector((s) => s.files);

  if (loading) return (
    <div className="loading-grid">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-top" />
          <div className="skeleton-line w80" />
          <div className="skeleton-line w60" />
          <div className="skeleton-line w40" />
        </div>
      ))}
    </div>
  );

  if (!files.length) return (
    <div className="empty-state">
      <div className="empty-icon">🗂</div>
      <h3>No documents found</h3>
      <p>Upload a file or adjust your search filters</p>
    </div>
  );

  return (
    <div className="files-grid">
      {files.map((file) => <FileCard key={file.id} file={file} />)}
    </div>
  );
}