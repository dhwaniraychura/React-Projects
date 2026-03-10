import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "6ba5452d9dd021d773adb82a6a78c9a4";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      setMovie(res.data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );

  return (
    <div className="container mt-5 mb-5">
      <Link to="/" className="btn btn-secondary mb-4 rounded-pill px-4">← Back to Movies</Link>
      <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid w-100"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
          <div className="col-md-8 p-5 d-flex flex-column justify-content-center bg-light">
            <h1 className="fw-bolder display-5 mb-3">{movie.title}</h1>
            <div className="d-flex gap-3 mb-4">
              <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill shadow-sm">
                📅 {movie.release_date}
              </span>
              <span className="badge bg-warning text-dark fs-6 px-3 py-2 rounded-pill shadow-sm">
                ⭐ {movie.vote_average.toFixed(1)} / 10
              </span>
            </div>
            <h4 className="fw-bold border-bottom pb-2 mt-2">Overview</h4>
            <p className="lead mt-3 text-muted" style={{ lineHeight: "1.8" }}>
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;