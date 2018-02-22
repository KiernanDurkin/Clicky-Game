import React from "react";


const Counter = props =>

  (
    <div id="main">
      <nav className="navbar"><ul><li className="brand">
        <a href="/clicky-react/">Clicky Game</a></li><li className="">Click an image to begin!</li>
        <li>Score: {props.score} | Top Score:{props.highScore}</li></ul></nav>


    </div>



  );

export default Counter;
