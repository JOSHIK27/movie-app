import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import "../cssComponents/movieInfo.css";
function MovieInfo({ movie_info }) {
  const [ind, setInd] = useState(0);
  if (ind == 0) {
    setInd(1);
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_info.id}/images?api_key=bdaec69ff4e98377065cc8e1b416ac73`
    )
      .then((res) => res.json())
      .then((data) => setData(data.backdrops));
  }, []);

  let bgUrl;
  let posterUrl;
  if (data.length) {
    bgUrl = "https://image.tmdb.org/t/p/original/" + data[0].file_path;
    posterUrl = "https://image.tmdb.org/t/p/original/" + movie_info.poster_path;
  }
  return (
    <>
      <div className="par">
        {data.length && (
          <img className="bgImg" src={bgUrl} width={1300} height={600} />
        )}
      </div>
      {posterUrl && (
        <img src={posterUrl} className="poster" width={300} height={450} />
      )}
      <div className="second" height={600}>
        <Stack spacing={1}>
          <Rating
            name="half-rating-read"
            defaultValue={movie_info.vote_average / 2}
            precision={0.1}
            readOnly
            className="rate"
          />
        </Stack>
        <h4 className="name">{movie_info.original_title}</h4>
        <h4 className="releaseDate">
          Release Date : {movie_info.release_date}
        </h4>
        <h4 className="story">Overview : {movie_info.overview}</h4>
      </div>
    </>
  );
}

export default MovieInfo;
