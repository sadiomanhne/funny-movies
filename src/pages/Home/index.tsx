import { useCallback, useEffect, useState } from "react";
import MovieItem from "../../components/MovieItem";
import MovieService from "../../services/movie";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getAllMovies = useCallback(async () => {
    setLoading(true);
    const movies = await MovieService.getAll();
    movies && setMovies(movies);
    setLoading(false);
  }, [setMovies, setLoading]);

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return loading ? (
    <div className="loading">
      <div className="spinner-border text-primary" role="status"></div>
    </div>
  ) : (
    <div className="movie-list">
      {movies.map((movie: IMovie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
      {movies.length === 0 && <div>No movies found.</div>}
    </div>
  );
};

export default Home;
