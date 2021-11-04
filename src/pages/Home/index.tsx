import { useCallback, useEffect } from "react";
import MovieItem from "../../components/MovieItem";
import { useMovies } from "../../contexts/movie";
import MovieService from "../../services/movie";
import IMovie from "../../types";

const Home: React.FC = () => {
  const { movies = [], setMovies } = useMovies();

  const onDataChange = useCallback(
    (snapshot: any) => {
      const movies = snapshot?.val() || [];
      setMovies(movies);
    },
    [setMovies]
  );

  useEffect(() => {
    MovieService.getAll().on("value", onDataChange);
    return () => {
      MovieService.getAll().on("value", onDataChange);
    };
  }, [onDataChange]);

  return (
    <div className="movie-list">
      {movies.map((movie: IMovie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Home;
