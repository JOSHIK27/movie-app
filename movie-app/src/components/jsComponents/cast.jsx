import { useEffect, useState } from "react";
import "../cssComponents/cast.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Cast({ id }) {
  const [rend, setRend] = useState(0);
  if (rend == 0) setRend(rend + 1);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=bdaec69ff4e98377065cc8e1b416ac73`
    )
      .then((res) => res.json())
      .then((x) => {
        setCast(x.cast);
      });
  }, []);
  return (
    <>
      <div className="c">
        {cast.length &&
          cast.map((x) => {
            let url = `https://image.tmdb.org/t/p/original/${x.profile_path}`;
            return (
              <Card sx={{ width: 200 }} className="card">
                <CardMedia
                  sx={{ height: 300 }}
                  image={url}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {x.character}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Department : {x.known_for_department}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default Cast;
