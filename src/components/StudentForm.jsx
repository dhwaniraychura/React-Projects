import React, { useState, useRef } from "react";

export default function StudentForm({ addStudent }) {
  const nameRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
    course: ""
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z]+([ \-\'][a-zA-Z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactRegex = /^\d{10}$/;

    if (!nameRegex.test(form.name.trim())) {
      newErrors.name = "Enter a valid name";
    }
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!contactRegex.test(form.contact)) {
      newErrors.contact = "Enter a 10-digit number";
    }
    if (!form.city) {
      newErrors.city = "Please select a city";
    }
    if (!form.course) {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      nameRef.current.focus(); 
      return;
    }
    addStudent(form);
    setForm({
      name: "",
      email: "",
      contact: "",
      city: "",
      course: ""
    });
    setErrors({});
    nameRef.current.focus();
  };

  return (
      <form onSubmit={handleSubmit} className="student-form p-4 border rounded-4 shadow-sm mt-4">
          <h3 className="mb-4 text-center fw-bold">Add Student</h3>
          <div className="mb-3">
              <label className="form-label">Student Name</label>
              <input ref={nameRef} type="text" name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Enter student name"/>
              <p className="text-danger">{errors.name || ""}</p>
          </div>
          <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}className="form-control" placeholder="Enter email" />
              <p className="text-danger">{errors.email || ""}</p>
          </div>
          <div className="mb-3">
              <label className="form-label">Contact Number</label>
              <input type="number" name="contact" value={form.contact} onChange={handleChange} className="form-control" placeholder="Enter contact number"/>
              <p className="text-danger">{errors.contact || ""}</p>
          </div>
          <div className="mb-3">
              <label className="form-label">City</label>
              <select name="city" value={form.city} onChange={handleChange}className="form-control">
                  <option value="">Select City</option>
                  <option value="Surat">Surat</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Junagadh">Junagadh</option>
              </select>
              <p className="text-danger">{errors.city || ""}</p>
          </div>
          <div className="mb-3">
              <label className="form-label">Course</label>
              <select name="course" value={form.course} onChange={handleChange}className="form-control">
                  <option value="">Select Course</option>
                  <option value="Frontend Development">Frontend Development</option>
                  <option value="Fullstack Development">Fullstack Development</option>
                  <option value="UI/UX Designing">UI/UX Designing</option>
                  <option value="Data Science">Data Science</option>
              </select>
              <p className="text-danger">{errors.course || ""}</p>
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Add Student</button>
      </form>
  );
}
