import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
function EditEmployee(){
    const {i} = useParams()
    const navigate = useNavigate();
    const [emp, setEmp] = useState({})

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Employees Data")) || [];
        setEmp(data[i]);
    }, [i]);

    const handleChange = (e) =>{
        setEmp({
            ...emp,
            [e.target.name] : e.target.value
        });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem("Employees Data")) || [];
        data[i] = emp;
        localStorage.setItem("Employees Data", JSON.stringify(data));
        navigate("/view");
    };

    return(
        <>
            <h2 className="text-center my-4">Edit Page</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card p-4">
                            <form onSubmit={handleUpdate} className="mt-4">
                                <div className="col-12 ">
                                <label htmlFor="#" className="form-label">Name :</label>
                                <input type="text" name="name" value={emp.name || ""} onChange={handleChange} className="form-control" required />
                                </div>
                                 <div className="col-12 mt-3">
                                <label htmlFor="#" className="form-label">Department :</label>
                                <input type="text" name="department" value={emp.department || ""} onChange={handleChange} className="form-control" required />
                                </div>
                                 <div className="col-12 mt-3">
                                <label htmlFor="#" className="form-label">Designation :</label>
                                <input type="text" name="designation" value={emp.designation || ""} onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="d-flex gap-2">
                                    <div className="col-md-6 mt-3">
                                <label htmlFor="#" className="form-label">Status</label>
                                <select name="status" value={emp.status || ""} onChange={handleChange} className="form-select" required>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                                </div>
                                 <div className="col-md-6 mt-3">
                                <label htmlFor="#" className="form-label">Salary :</label>
                                <input type="number" name="salary" value={emp.salary} onChange={handleChange} className="form-control" required />
                                </div>
                                </div>
                                
                                 <div className="col-12 text-center mt-4">
                                <button className="btn btn-modern px-5">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}  
export default EditEmployee
