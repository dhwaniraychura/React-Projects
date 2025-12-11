import React, { useState, useEffect } from "react";

export default function RecordForm({ onAdd, editingStudent  }) {
  const [formData, setFormData] = useState({
    roll_no: "",
    name: "",
    DOB: "",
    email: "",
    password: "",
    gender: "",
    course: "",
    address: "",

  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd( formData);          // <-- SEND DATA TO APP
    setFormData({             // <-- CLEAR FORM
      roll_no: "",
      name: "",
      DOB: "",
      email: "",
      password: "",
      gender: "",
      course: "",
      address: "",
    });
  }

  return (
      <>
      <div className="form-container">
        <h1 className="title">Student Registration</h1>

        <form action="" method="post" className="modern-form" onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Roll No</label>
            <input
              type="number"
              name="roll_no"
              value={formData.roll_no}
              onChange={handleChange}
              placeholder="Enter Roll_no"
              required
            />
          </div>

          <div className="input-group">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="input-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email "
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="input-group">
            <label>Gender</label>
            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>
            </div>
          </div>

          <div className="input-group">
            <label>Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter Course"
              required
            >
              <option value="">Select Course</option>
              <option>FullStack Development</option>
              <option>Animation</option>
              <option>UI/UX</option>
              <option>Graphic</option>
            </select>
          </div>

          <div className="input-group">
            <label>Address (optional)</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
            ></textarea>
          </div>

          <button className="submit-btn">{editingStudent === null ? "Add Student" : "Update Student"}</button>
        </form>
      </div> 
      </>
    
  );
}
