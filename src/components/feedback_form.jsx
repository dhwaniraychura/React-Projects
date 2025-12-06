import React, { useEffect, useRef, useState } from "react";
import DynamicList from "./DynamicList";
import FeedbackList from "./FeedbackList";

export default function FeedbackForm() {
  const [form, Setform] = useState({
    Fullname: "",
    email: "",
    category: "",
    priority: "",
    description: ""
  });

  const URL = useRef();
  const [descriptionList, setDescriptionList] = useState([""]);
  const [notesList, setNotesList] = useState([""]);
  const [feedbackList, setFeedbackList] = useState([]);
  const [error, SetError] = useState({});
  const [isValid, SetisValid] = useState(false);
  const [touched, setTouched] = useState({});
  const [focused, setFocused] = useState({});

  function handleChange(e) {
    Setform({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newFeedback = {
        Fullname: form.Fullname,
        email: form.email,
        category: form.category,
        priority: form.priority,
        description: descriptionList,
        notes: notesList,
        image: URL.current.value || "",
      };
      setFeedbackList([...feedbackList, newFeedback]);
      Setform({ Fullname: "", email: "", category: "", priority: "", description: "" });
      setDescriptionList([""]);
      setNotesList([""]);
      URL.current.value = "";
      setTouched({});
      SetError({});
    }
  };

  const validate = () => {
    const newError = {};
    const FullnameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!FullnameRegex.test(form.Fullname.trim())) newError.Fullname = "Enter a valid name";
    if(!emailRegex.test(form.email)) newError.email = "Enter valid email";
    if(descriptionList[0].length < 10) newError.description = "Minimum 10 characters required";
    if(descriptionList[0].length > 100) newError.description = "Maximum 100 characters allowed";
    if(form.category === "") newError.category = "Please select any one";
    if(form.priority === "") newError.priority = "Please select any one";

    SetError(newError);
    return Object.keys(newError).length === 0;
  };

  useEffect(() => {
    SetisValid(validate());
  }, [form, descriptionList]);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const newError = { ...error };

    if (name === "Fullname") {
      const FullnameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
      if (!FullnameRegex.test(value.trim())) newError.Fullname = "Enter a valid name";
      else delete newError.Fullname;
    }

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) newError.email = "Enter valid email";
      else delete newError.email;
    }

    if (name === "description") {
      if (value.length < 10) newError.description = "Minimum 10 characters required";
      else if (value.length > 100) newError.description = "Maximum 100 characters allowed";
      else delete newError.description;
    }

    if (name === "category" && value === "") newError.category = "Please select any one";
    else if(name === "category") delete newError.category;

    if (name === "priority" && value === "") newError.priority = "Please select any one";
    else if(name === "priority") delete newError.priority;

    SetError(newError);
  };

  return (
    <>
      <form className="feedback-container" onSubmit={handleSubmit}>
        <h2 className="title">Feedback Submission Form</h2>

        <div className="input-group">
          <label>Full Name</label>
          <input type="text" name="Fullname" placeholder="Enter Your Full Name"
            onChange={handleChange} onBlur={handleBlur} onFocus={() => setFocused(prev => ({ ...prev, Fullname: true }))}
            className={focused.Fullname ? "input-focused" : ""} required/>
          <p className="text-danger">{touched.Fullname && error.Fullname}</p>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter Your Email"
            onChange={handleChange} onBlur={handleBlur} onFocus={() => setFocused(prev => ({ ...prev, email: true }))}
            className={focused.email ? "input-focused" : ""} required/>
          <p className="text-danger">{touched.email && error.email}</p>
        </div>

        <div className="input-group">
          <label>Category</label>
          <select name="category"
            onChange={handleChange} onBlur={handleBlur} onFocus={() => setFocused(prev => ({ ...prev, category: true }))}
            className={focused.category ? "input-focused" : ""} required>
            <option value="">Choose Category</option>
            <option value="bug">Bug</option>
            <option value="suggestion">Suggestion</option>
            <option value="complaint">Complaint</option>
            <option value="other">Other</option>
          </select>
          <p className="text-danger">{touched.category && error.category}</p>
        </div>

        <div className="input-group">
          <label>Priority</label>
          <select name="priority"
            onChange={handleChange} onBlur={handleBlur} onFocus={() => setFocused(prev => ({ ...prev, priority: true }))}
            className={focused.priority ? "input-focused" : ""} required>
            <option value="">Choose Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <p className="text-danger">{touched.priority && error.priority}</p>
        </div>

        <DynamicList
          list={descriptionList} setList={setDescriptionList} title="Description" minRows={3} placeholder="Enter detailed description..." />

        <div className="input-group">
          <label>Image URL(optional)</label>
          <input type="url" placeholder="Enter Image URL..." ref={URL} />
        </div>

        <DynamicList
          list={notesList} setList={setNotesList} title="Notes" minRows={2} placeholder="Enter note..." />

        <button className="submit-btn" type="submit" disabled={!isValid}>Submit</button>
      </form>

      <FeedbackList feedbackList={feedbackList} />
    </>
  );
}
