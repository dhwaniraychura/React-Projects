import React, { useState } from "react";
import './App.css'
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default function App() {
  const [students, setStudents] = useState([]);
  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now(), status: "Absent" }]);
  };
  const deleteStudent = (id) => { 
    setStudents(students.filter((stu) => stu.id !== id));
  };
  const markStatus = (id, status) => {
    setStudents(
      students.map((stu) =>
        stu.id === id ? { ...stu, status } : stu
      )
    );
  };
  return (
    <div className="container mt-4">
      <StudentForm addStudent={addStudent} />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        markStatus={markStatus}
      />
    </div>
  );
}


