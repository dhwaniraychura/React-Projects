import React from "react";
import { UserRound } from 'lucide-react'
import {ChartNoAxesColumnIncreasing} from 'lucide-react'

export default function RecordRow({ students }) {

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    padding: "20px",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.1)"
  };

  const labelStyle = {
    fontSize: "0.85rem",
    opacity: 0.7,
  };

  const totalStudents = students.length;
 
  const lastStudent = totalStudents > 0 ? students[students.length - 1] : null;

  return (
    <div className="container">
      <div className="row g-4 mt-3">

        <div className="col-md-4">
          <div className="card text-white shadow-sm border-0" style={cardStyle}>
            <div className="card-body">
              <div style={labelStyle}>Total Students</div>
              <h2 className="fw-bold mt-2 text-info">{totalStudents}</h2>
            </div>
          </div>
        </div>

        {/* Last Registered Student */}
        <div className="col-md-4">
          <div className="card text-white shadow-sm border-0" style={cardStyle}>
            <div className="card-body">
              <div style={labelStyle}>Last Registered Student</div>

              {lastStudent ? (
                <p className="fw-semibold mt-2">
                  <UserRound strokeWidth={2.5} className="me-2"/>{lastStudent.name} <br />
                </p>
              ) : (
                <p className="fw-semibold mt-2"><UserRound /> None yet.</p>
              )}

            </div>
          </div>
        </div>

        {/* Storage Status */}
        <div className="col-md-4">
          <div className="card text-white shadow-sm border-0" style={cardStyle}>
            <div className="card-body">
              <div style={labelStyle}>Storage Status</div>
              <p className="fw-semibold mt-2"><ChartNoAxesColumnIncreasing size={26} strokeWidth={2.5} className="me-2"/> Persisted Locally (JSON)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
