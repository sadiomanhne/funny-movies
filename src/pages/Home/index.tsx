import { useCallback, useEffect, useState } from "react";
import MovieItem from "../../components/MovieItem";
import MovieService from "../../services/movie";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getAllMovies = useCallback(async () => {
    const movies = await MovieService.getAll();
    movies && setMovies(movies);
  }, [setMovies]);

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <div className="movie-list">
      {movies.map((movie: IMovie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Home;
