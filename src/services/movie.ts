import { db } from "../firebase";
import IMovie from "../types";

const moviesColectionRef = db.collection("movies");

class MovieService {
  async getAll() {
    try {
      const querySnapshot = await moviesColectionRef
        .orderBy("id", "desc")
        .get();
      let movies: IMovie[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const movie: IMovie = {
          id: data.id,
          embedId: data.embedId,
          title: data.title,
          description: data.description,
          shareBy: data.shareBy,
        };
        movies.push(movie);
      });
      return movies;
    } catch (err) {
      alert("An unexpected error has occurred when query data!");
    }
  }

  add(movies: IMovie) {
    try {
      moviesColectionRef.doc(movies.id).set(movies);
    } catch (err) {
      alert("An unexpected error has occurred when save data!");
    }
  }
}

export default new MovieService();
