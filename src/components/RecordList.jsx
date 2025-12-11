import React from "react";

export default function RecordList({ students, onEdit, onDelete, onClear }) {
  return (
    <div className="record-container">
      <div className="header-row">
        <h2 className="record-title">Registered Students</h2>

        {students.length > 0 && (
          <button className="clear-btn" onClick={onClear}>
            Clear All
          </button>
        )}
      </div>

      <table className="record-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Course</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-data">
                No Students Registered
              </td>
            </tr>
          ) : (
            students.map((stu,i) => {
              return(
                 <tr key={i}>
                <td>{stu.roll_no}</td>
                <td>{stu.name}</td>
                <td>{stu.email}</td>
                <td>{stu.gender}</td>
                <td>{stu.course}</td>
                <td>{stu.DOB}</td>
                <td className="action-buttons">
                  <button className="edit-btn" onClick={() => onEdit(stu)}>
                    ✏️
                </button>

                  <button className="delete-btn" onClick={() => onDelete(stu.roll_no)}>
                    🗑️
                  </button>
                </td>
              </tr>
              )
             
          })
          )}
        </tbody>
      </table>
    </div>
  );
}
