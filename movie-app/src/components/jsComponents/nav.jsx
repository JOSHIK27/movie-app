import "../cssComponents/nav.css";
import React, { useState } from "react";
import PopularTrending from "./popular.jsx";
import Trending from "./trending.jsx";
function Navbar() {
  const [val, setVal] = useState(0);
  function trend() {
    setVal(0);
  }
  function m() {
    setVal(1);
  }
  return (
    <>
      <div className="parent">
        <h4 className="child" onClick={trend}>
          Trending
        </h4>
        <h4 className="child" onClick={m}>
          Movies
        </h4>
        <h4 className="child">Shows</h4>
        <h4 className="child">More</h4>
      </div>
      {val == 0 ? <PopularTrending /> : <Trending />}
    </>
  );
}

export default Navbar;
