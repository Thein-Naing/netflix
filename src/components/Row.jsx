import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../utils/Requests";
import "../Style/Row.css";

// define baseURL using tmdb image documentation.
const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow=false  }) => {
  /* title , fetchURL are outside of useEffect block.
we need to tell useEffect that you are using fetchURL outside of the  block and
you need to specify in dependency array
*/
  const [movies, setMovies] = useState([]); // when Row component is loaded, useEffect will run.

  useEffect(() => {
    // if [] means run once only when Row is loaded
    async function fetchData() {
      // fetchURL is dependent here. You must add into dependency array.
      const request = await axios.get(fetchURL);
      // data.results come from developer console.
      setMovies(request.data.results);

      return request;
    }

    fetchData();
    // so add fetchURL into dependency array otherwise render will not update what your are actually fetching and  will render non stop.
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row_posters">
        {/* a couple of row posters */}
        {movies.map((movie) => (
           (isLargeRow && movie.poster_path) ||
           (!isLargeRow && movie.backdrop_path)) &&
          // <img
          //   key= {movie.id}
          //   className="row_poster"
          //   src={`${baseURL}${movie.poster_path}`}
          //   alt={movie.name}
          // />
          <img key={movie.id}
                        className = {`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        src={`${baseURL}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt = {movie.name}// backdrop_path  come from console
                    />
        )}
      </div>
    </div>
  );
};

export default Row;
