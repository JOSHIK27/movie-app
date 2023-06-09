import { useEffect, useState } from "react";
import "../cssComponents/trending.css";
function Trending() {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=bdaec69ff4e98377065cc8e1b416ac73`;
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((x) => {
        setTrendingMovies(x.results);
      });
  }, []);

  return (
    <>
      <div className="trendingParent">
        {trendingMovies &&
          trendingMovies.map((x) => {
            let imgUrl = `https://image.tmdb.org/t/p/original/${x.poster_path}`;
            return (
              <img className="trending" src={imgUrl} width={300} height={450} />
            );
          })}
      </div>
    </>
  );
}
export default Trending;
