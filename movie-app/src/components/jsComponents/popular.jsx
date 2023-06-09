import { useEffect, useState } from "react";
import "../cssComponents/popular.css";
import MoviePage from "./moviePage";
import Cast from "./cast";
function PopularTrending() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=bdaec69ff4e98377065cc8e1b416ac73`;
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(true);
  const [i_d, setId] = useState(-1);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((x) => {
        setPopularMovies(x.results);
      });
  }, []);
  if (!page) return <Cast id={i_d} />;
  function handleClick(x) {
    setPage(false);
    setId(x);
  }
  return (
    <>
      <div className="popularParent">
        {popularMovies &&
          popularMovies.map((x) => {
            let imgUrl = `https://image.tmdb.org/t/p/original/${x.poster_path}`;
            return (
              <img
                onClick={() => handleClick(x.id)}
                className="popular"
                src={imgUrl}
                width={300}
                height={450}
              />
            );
          })}
      </div>
    </>
  );
}
export default PopularTrending;
