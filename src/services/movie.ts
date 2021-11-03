import firebase from "../firebase";
import IMovie from "../types";

const db = firebase.ref("movies");

class MovieService {
  getAll() {
    return db;
  }

  create(movie: IMovie) {
  return db.set([movie])
  }

  update(key: string, value: any) {
    return db.child(key).update(value);
  }

  delete(key: string) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new MovieService();