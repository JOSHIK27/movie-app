import { useEffect, useState } from "react";
import "../cssComponents/popular.css";
import React from "react";
import MovieInfo from "./movieInfo";
import Carousel from "better-react-carousel";
function PopularTrending() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=bdaec69ff4e98377065cc8e1b416ac73`;
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(true);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((x) => {
        setPopularMovies(x.results);
      });
  }, []);
  if (!page) return <MovieInfo movie_info={movie} />;
  function handleClick(x) {
    setPage(false);
    setMovie(x);
  }
  return (
    <>
      <Carousel cols={5} rows={2} loop>
        {popularMovies &&
          popularMovies.map((x) => {
            let imgUrl = `https://image.tmdb.org/t/p/original/${x.poster_path}`;
            return (
              <Carousel.Item>
                <img
                  onClick={() => handleClick(x)}
                  className="popular"
                  src={imgUrl}
                  width={200}
                  height={300}
                />
              </Carousel.Item>
            );
          })}
      </Carousel>
    </>
  );
}
export default PopularTrending;
