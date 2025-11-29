import React from "react";
import StudentCard from "./StudentCard";

export default function StudentList({ students, deleteStudent, markStatus }) {
  return (
    <div className="mt-4">
      <h3 className="fw-bold">Student List</h3>

      {students.length === 0 ? (
        <p className="text-secondary">No students added yet.</p>
      ) : (
        students.map((stu) => (
          <StudentCard
            key={stu.id}
            student={stu}
            deleteStudent={deleteStudent}
            markStatus={markStatus}
          />
        ))
      )}
    </div>
  );
}
