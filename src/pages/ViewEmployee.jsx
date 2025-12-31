import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function ViewEmployee() {
    const [emp, setemp] = useState(() => {
        return JSON.parse(localStorage.getItem("Employees Data")) || [];
    })
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("");

   const finalEmployees = [...emp]
    .filter(employee =>
        employee.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(employee =>
        filter === "all" ? true : employee.status === filter
    )
    .sort((a, b) => {
        if (sort === "name-a") return a.name.localeCompare(b.name);
        if (sort === "name-z") return b.name.localeCompare(a.name);
        if (sort === "name-l") return a.salary - b.salary;
        if (sort === "name-h") return b.salary - a.salary;
        return 0;
    });

    const handleDelete = (index) => {
         const updateEmp = emp.filter((_, i) => i !== index);
        setemp(updateEmp);
        localStorage.setItem("Employees Data", JSON.stringify(updateEmp));
    }
    const handleClearAll = () => {
    const confirmClear = window.confirm(
        "Are you sure you want to delete all employees?"
    );

    if (confirmClear) {
        setemp([]);
        localStorage.removeItem("Employees Data");
    }
};

    return (
        <>
            <h1 className="text-center my-4 fw-bold">Employee List</h1>
            <div className="container mb-4">
                <div className="card p-3 shadow-sm">
                    <div className="row g-3 align-items-end">

                        <div className="col-md-4">
                            <label className="form-label fw-semibold">Search</label>
                            <input
                                type="search"
                                placeholder="Search by name"
                                className="form-control"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-semibold">Status</label>
                            <select
                                className="form-select"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option value="all">All</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-semibold">Sort By</label>
                            <select
                                className="form-select"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="name-a">Name A-Z</option>
                                <option value="name-z">Name Z-A</option>
                                <option value="name-l">Salary Low → High</option>
                                <option value="name-h">Salary High → Low</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="d-flex justify-content-end mb-3">
                    <button
                        className="btn btn-danger"
                        onClick={handleClearAll}
                        disabled={!emp.length}
                    >
                        Clear All Employees
                    </button>
                </div>

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
                                {finalEmployees.length ? (
                                    finalEmployees.map((employee, i) => (
                                        <tr key={i}>
                                            <td>{employee.eid}</td>
                                            <td>
                                                <img
                                                    src={employee.img}
                                                    width="50"
                                                    height="50"
                                                    className="rounded-circle"
                                                />
                                            </td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                            <td>{employee.department}</td>
                                            <td>{employee.designation}</td>
                                            <td>₹ {employee.salary}</td>
                                            <td>
                                                <span
                                                    className={`badge ${employee.status === "active"
                                                            ? "bg-success"
                                                            : "bg-danger"
                                                        }`}
                                                >
                                                    {employee.status}
                                                </span>
                                            </td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm btn-warning me-2"
                                                    to={`/edit/${i}`}>
                                                    Edit
                                                </Link>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDelete(i)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="10" className="text-center">
                                            No employees found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
       
    )
}