import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(!name.trim()) return alert("Please enter your name!");
    
    dispatch(login({ name }));
    alert(`Welcome, ${name}! Login Successful 🎬`);
    navigate("/"); 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "75vh" }}>
      <div className="card shadow-lg border-0 rounded-4 p-5 w-100" style={{ maxWidth: "450px" }}>
        <div className="text-center mb-4">
          <div className="bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3 shadow" style={{ width: "60px", height: "60px", fontSize: "24px" }}>
            👤
          </div>
          <h2 className="fw-bold text-dark">Welcome Back!</h2>
          <p className="text-muted">Enter your name to unlock the library</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              className="form-control form-control-lg bg-light border-0 px-4 py-3 rounded-pill shadow-sm"
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill fw-bold shadow">
            Start Watching 🍿
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;