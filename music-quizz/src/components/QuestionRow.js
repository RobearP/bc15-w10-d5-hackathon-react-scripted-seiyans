import { useState } from "react";
import "../App.css";


export default function QuestionRow({
  question,
  rightanswer,
  wronganswer,
  correctAnswer,
}) {
  console.log({ question });

  const [isClicked, setIsClicked] = useState(false);
  // const handleClick = () => {
  //     setIsClicked(!isClicked);
  //   };

  const handleWrongClick = () => {
    setIsClicked(true);
  };

  const handleCorrectClick = () => {
    setIsClicked(true);
    correctAnswer();
  };

  return (
    <>
    <span className="question">Question:
      <p>{question}</p>
      <button onClick={handleCorrectClick} className={isClicked ? "green" : "wait"}>
        {rightanswer}
      </button>
      <button onClick={handleWrongClick} className={isClicked ? "red" : "wait"}>
        {wronganswer}
      </button>
      </span>
    </>
  );
}
