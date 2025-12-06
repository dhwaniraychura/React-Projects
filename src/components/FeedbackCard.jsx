import React from "react";

export default function FeedbackCard({ feedback }) {
  const fb = feedback;

  return (
    <div className="feedback-card">
      <div className="card-header">
        <h3>{fb.Fullname}</h3>
        <span>{fb.email}</span>
      </div>

      <div className="badges">
        <span className={`badge category-${fb.category}`}>{fb.category}</span>
        <span className={`badge priority-${fb.priority.toLowerCase()}`}>{fb.priority}</span>
      </div>

      <div className="section">
        <h4>Description</h4>
        <ul>
          {fb.description.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>

      {fb.notes.length > 0 && (
        <div className="section">
          <h4>Notes</h4>
          <ul>
            {fb.notes.map((n, i) => <li key={i}>{n}</li>)}
          </ul>
        </div>
      )}

      {fb.image && (
        <div className="section">
          <h4>Screenshot Preview</h4>
          <img src={fb.image} alt="Screenshot" className="preview-img" />
        </div>
      )}
    </div>
  );
}
