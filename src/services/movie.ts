import firebase from "../firebase";
import IMovie from "../types";

const db = firebase.ref("movies");

class MovieService {
  getAll() {
    return db;
  }

  update(movies: IMovie[]) {
    debugger;
    return db.set(movies);
  }
}

export default new MovieService();
