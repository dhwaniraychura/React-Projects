import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
export default function AddEmployee(){
   const [Employees, setEmployees] = useState(() =>(
        JSON.parse(localStorage.getItem("Employees Data")) || []
   ));
   const [emp, setemp] = useState({
      eid : "",
      name : "",
      email : "",
      phone : "",
      status :"active",
      department : "",
      designation : "",
      salary : "",
      img : ""
   })

   useEffect(() =>{
     localStorage.setItem("Employees Data", JSON.stringify(Employees));
   },[Employees])

   const navigator = useNavigate();

  const handleChange = (e) => {
    setemp({
      ...emp,
      [e.target.name]: e.target.value
    });
  };

  const handleImg = (e) =>{
    const reader = new FileReader();
    reader.onloadend = () =>{
        setemp({
          ...emp,
          img : reader.result
        });
    }
      reader.readAsDataURL(e.target.files[0]);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setEmployees([...Employees, emp]);
      setemp({
       eid : "",
       name : "",
       email : "",
       phone : "",
       status :"active",
       department : "",
       designation : "",
       salary : "",
       img : ""
      });
      navigator("/view");
  }
    return(
        <>
        <h1 className="text-center my-4 fw-bold">Add Employee</h1>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <input className="form-control" name="eid" placeholder="Employee ID" onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <input className="form-control" name="name" placeholder="Full Name" onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <input className="form-control" name="email" placeholder="Email" onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <input className="form-control" name="phone" placeholder="Phone" onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <input className="form-control" name="department" placeholder="Department" onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <input className="form-control" name="designation" placeholder="Designation" onChange={handleChange} required />
                    </div>

                    <div className="col-md-6">
                      <select className="form-select" name="status" onChange={handleChange} required>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <input className="form-control" name="salary" placeholder="Salary" onChange={handleChange} required />
                    </div>

                    <div className="col-12">
                      <input className="form-control" type="file" onChange={handleImg} required />
                    </div>

                    <div className="col-12 text-center mt-3">
                      <button className="btn btn-modern">Submit</button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        </>
    )
}