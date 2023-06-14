import { useEffect, useState } from "react";
import "../cssComponents/trending.css";
import React from "react";
import Carousel from "better-react-carousel";
import MovieInfo from "./movieInfo";
function Trending() {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=bdaec69ff4e98377065cc8e1b416ac73`;
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(true);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((x) => {
        setTrendingMovies(x.results);
      });
  }, []);
  if (!page) {
    return <MovieInfo movie_info={movie} />;
  }
  function handleClick(x) {
    setPage(false);
    setMovie(x);
  }
  return (
    <>
      <Carousel cols={5} rows={2} loop>
        {trendingMovies &&
          trendingMovies.map((x) => {
            let imgUrl = `https://image.tmdb.org/t/p/original/${x.poster_path}`;
            console.log(x);
            return (
              <Carousel.Item>
                <img
                  onClick={() => {
                    handleClick(x);
                  }}
                  className="trending"
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
export default Trending;
