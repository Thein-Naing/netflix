import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../utils/Requests";
import "../Style/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.UpComing);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  // create truncate function for text
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {""}
        {/* title */}
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

        {/* Button */}
        {/* Button */}
        {/* div.banner_buttons>button.banner_buttons*2 */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* description */}
        <h1 className="banner_description">
          {/* add truncate function */}
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeButton" />
    </header>
  );
};

export default Banner;
