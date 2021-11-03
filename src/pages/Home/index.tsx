import { useEffect, useState } from "react";
import MovieItem from "../../components/MovieItem";
import MovieService from "../../services/movie";
import IMovie from "../../types";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const onDataChange = (snapshot: any) => {
    const movies = snapshot?.val() || [];
    setMovies(movies);
  };

  useEffect(() => {
    MovieService.getAll().on("value", onDataChange);
    return () => {
      MovieService.getAll().on("value", onDataChange);
    };
  }, []);

  return (
    <div className="movie-list">
        {movies.map((movie: IMovie) => (
          <MovieItem key={movie.id} {...movie}/>
        ))}
    </div>
  );
};

export default Home;
