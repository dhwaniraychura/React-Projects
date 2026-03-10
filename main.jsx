import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isLoginPage = location.pathname === "/login";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 text-warning d-flex align-items-center gap-2" to="/">
          🎬 Movie Library
        </Link>

        {!isLoginPage && (
          <div className="d-flex align-items-center gap-3">
            <Link className="nav-link text-light fw-semibold px-3" to="/search">
              🔍 Search
            </Link>

            {user ? (
              <div className="d-flex align-items-center gap-3">
                <span className="text-white-50 small d-none d-sm-block">
                  Welcome, <span className="text-warning fw-bold">{user.name}</span>
                </span>
                <button 
                  onClick={handleLogout} 
                  className="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold border-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-warning fw-bold rounded-pill px-4 shadow-sm">
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;