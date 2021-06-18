import axios from "axios";

export default class MovieService {
  getMovies() {
    return axios.post("http://localhost:3000/movies/getmovies", { _id: "0" });
  }
}
