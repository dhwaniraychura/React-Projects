import React from "react";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackList({ feedbackList }) {
  return (
    <div className="dashboard">
      <h2>Feedback Dashboard</h2>
      {feedbackList.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        feedbackList.map((fb, index) => <FeedbackCard key={index} feedback={fb} />)
      )}
    </div>
  );
}
