import { useEffect, useState } from "react";
import "../cssComponents/moviePage.css";

function MoviePage({ id }) {
  const [images, setImages] = useState([]);
  const [ind, setInd] = useState(0);
  const [rend, setRend] = useState(0);
  if (rend == 0) setRend(rend + 1);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=bdaec69ff4e98377065cc8e1b416ac73`
    )
      .then((res) => res.json())
      .then((x) => {
        setImages(x.backdrops);
      });
  }, [rend]);
  function handleClick2() {
    if (ind < images.length - 1) setInd(ind + 1);
  }
  function handleClick1() {
    if (ind > 0) setInd(ind - 1);
  }
  let url;
  if (images.length) {
    let temp = images[ind].file_path;
    url = "https://image.tmdb.org/t/p/original/" + temp;
    console.log(url);
  }
  const add = "https://cdn-icons-png.flaticon.com/128/329/329365.png";
  return (
    <>
      {images.length > 0 && (
        <div className="movieParent">
          <img
            onClick={handleClick1}
            className="img1"
            src={add}
            height={50}
            width={50}
          />
          <img className="movieImg" src={url} width={550} height={300} />
          <img
            className="img2"
            onClick={handleClick2}
            src={add}
            height={50}
            width={50}
          />
        </div>
      )}
    </>
  );
}

export default MoviePage;
