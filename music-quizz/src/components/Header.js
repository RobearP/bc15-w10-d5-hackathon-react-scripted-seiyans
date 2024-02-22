import Over9000 from "../images/Over9000.png";
import { useState, useEffect } from "react";
import "../index.css";

export default function Header({ correct }) {
  const [visable, setVisable] = useState(false);

  useEffect(() => {
    if (correct > 0) {
      setVisable(true);
      setTimeout(() => {
        setVisable(false);
      }, 2000);
    }
  }, [correct]);

  return (
    <>
      <div className='headder'>
        <h1>DragonBall Z Quiz</h1>
        <article id="box">
          <p>Score</p>
          <p>{correct}</p>
        </article>
        <img
          class={visable ? "shown" : "hidden"}
          src={Over9000}
          alt="Over 9000"
        />
      </div>
    </>
  );
}
