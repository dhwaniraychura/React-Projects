import { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from '../redux/movieSlice';
import { Link } from "react-router-dom";
import { addFavorite } from "../redux/authSlice";

function MovieList() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  
  const [showPopup, setShowPopup] = useState(false);
  const [activeMovie, setActiveMovie] = useState("");

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleFavoriteClick = (e, movie) => {
    e.preventDefault();
    dispatch(addFavorite(movie));
    
    setActiveMovie(movie.title);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  if (loading) return <div className="text-center mt-5"><div className="spinner-border text-warning"></div></div>;

  return (
    <div className="container mt-5 mb-5 position-relative">
      
      {showPopup && (
        <div className="position-fixed top-50 start-50 translate-middle shadow-lg p-4 rounded-4 bg-dark text-white border border-warning text-center" 
             style={{ zIndex: 9999, minWidth: '300px', animation: 'fadeIn 0.3s ease-out' }}>
          <div className="fs-1 mb-2">❤️</div>
          <h5 className="fw-bold mb-0">{activeMovie}</h5>
          <small className="text-warning">Added to your Favorites!</small>
        </div>
      )}

      <h2 className="fw-bold mb-4 text-dark border-bottom pb-2">🔥 Popular Movies</h2>
      <div className="row g-4">
        {movies.map((movie) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={movie.id}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                <img 
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750"} 
                  className="card-img-top" 
                  alt={movie.title}
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between bg-light">
                  <h6 className="card-title fw-bold text-truncate">{movie.title}</h6>
                  <button 
                    className="btn btn-outline-danger w-100 rounded-pill mt-3 fw-semibold shadow-sm" 
                    onClick={(e) => handleFavoriteClick(e, movie)}> 
                    ❤️ Add Favorite 
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;