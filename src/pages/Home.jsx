import React, { useState } from "react";

export default function Home() {
  const [emp, setemp] = useState(() => (
    JSON.parse(localStorage.getItem("Employees Data")) || []
  ));

  return (
    <>
          <h1 className="text-center my-4 fw-bold">Employees</h1>

          <div className="container">
              <div className="row justify-content-center g-4">
                  {emp.length > 0 ? emp.map((e, i) => (
                      <div className="col-md-6 col-lg-4" key={i}>
                          <div className="card h-100 p-3 text-light">
                              <div className="d-flex align-items-center">
                                  <img
                                      src={e.img}
                                      className="rounded-circle me-3"
                                      width="80"
                                      height="80"
                                      alt={e.name}
                                  />
                                  <div>
                                      <h5 className="mb-1">{e.name}</h5>
                                      <small className="text-light">{e.designation}</small>
                                      <p className="mt-2 mb-0 fw-semibold">₹ {e.salary}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )) : <div className="card h-100 p-3 text-light">
                      <div className="d-flex align-items-center justify-content-center">
                              <h5 className="mb-1">No employees found</h5>
                      </div>
                  </div>}
              </div>
          </div>

    </>
  );
}
