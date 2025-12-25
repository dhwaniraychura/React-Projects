import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function ViewEmployee() {
    const [emp, setemp] = useState(() => {
        return JSON.parse(localStorage.getItem("Employees Data")) || [];
    })
    const handleDelete = (index) => {
         const updateEmp = emp.filter((_, i) => i !== index);
        setemp(updateEmp);
        localStorage.setItem("Employees Data", JSON.stringify(updateEmp));
    }
    return (
        <>
            <h1 className="text-center my-4 fw-bold">Employee List</h1>

            <div className="container">
                <div className="card p-3">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0 ">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                    <th>Designation</th>
                                    <th>Salary</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emp.length ? emp.map((employee, i) => (
                                    <tr key={i}>
                                        <td>{employee.eid}</td>
                                        <td>
                                            <img src={employee.img} width="50" height="50" className="rounded-circle" />
                                        </td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.designation}</td>
                                        <td>₹ {employee.salary}</td>
                                        <td>
                                            <span className={`badge ${employee.status === "active" ? "bg-success" : "bg-danger"}`}>
                                                {employee.status}
                                            </span>
                                        </td>
                                        <td>
                                            <Link className="btn btn-sm btn-warning me-2" to={`/edit/${i}`}>Edit</Link>
                                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(i)}>Delete</button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr><td colSpan="10" className="text-center">No employees found</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
       
    )
}