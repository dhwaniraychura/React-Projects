import React from "react";

export default function StudentCard({ student, deleteStudent, markStatus }) {
  return (
    <div className="card shadow-sm p-3 mt-3 border-0 rounded-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="fw-bold mb-0">{student.name}</h5>
        <span
          className={`badge ${
            student.status === "Present" ? "bg-success" : "bg-secondary"
          }`}
        >
          {student.status}
        </span>
      </div>

      <div className="mb-2">
        <p className="mb-1"><b>Email:</b> {student.email}</p>
        <p className="mb-1"><b>Contact:</b> {student.contact}</p>
        <p className="mb-1"><b>City:</b> {student.city}</p>
        <p className="mb-1"><b>Course:</b> {student.course}</p>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-sm btn-outline-success flex-grow-1" onClick={() => markStatus(student.id, "Present")}> Present </button>
        <button className="btn btn-sm btn-outline-warning flex-grow-1" onClick={() => markStatus(student.id, "Absent")}> Absent </button>
        <button className="btn btn-sm btn-outline-danger" onClick={() => deleteStudent(student.id)}>Delete </button>
      </div>
    </div>
  );
}
