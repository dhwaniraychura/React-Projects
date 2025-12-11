import { useState , useEffect} from 'react'
import './index.css'
import RecordForm from './components/RecordForm'
import RecordList from './components/RecordList'
import RecordRow from './components/RecordRow'

function App() {
const [students, setStudents] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("StudentRecords"));
    return Array(saved) ? saved : [];
});

const [editingStudent, setEditingStudent] = useState(null);

useEffect(() => {
    localStorage.setItem("StudentRecords", JSON.stringify(students));
  },[students]);

function handleAdd(student) {
    if (editingStudent) {
      setStudents(
        students.map((s) =>
          s.roll_no === editingStudent.roll_no ? student : s
        )
      );
      setEditingStudent(null);
    } else {
      setStudents([...students, student]);
    }
  }

function handleDelete(roll) {
  alert("Are you Sure?");
  setStudents(students.filter((s) => s.roll_no !== roll));
}

function handleEdit(student) {
    setEditingStudent(student);
}

function handleClear() {
  alert("Are you Sure?");
  setStudents([]);
}

  return (
    <>
      <RecordRow students={students} />
      <div className="record-layout">
        <div className="left-panel">
          <RecordForm onAdd={handleAdd} editingStudent={editingStudent}/>
        </div>
        <RecordList  students={students} onEdit={handleEdit} onDelete={handleDelete} onClear={handleClear}/>
      </div>
    </>
  )
}

export default App
