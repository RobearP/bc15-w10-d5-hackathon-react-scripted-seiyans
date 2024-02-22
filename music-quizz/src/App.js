//import { questionData } from "./questiondata.js";
import Header from "./components/Header.js";
import List from "./components/List.js";
import Footer from "./components/Footer.js";
import { useState } from "react";

function App() {
  let [correct, setCorrect] = useState(0);

  function correctAnswer() {
    setCorrect(correct + 1);
  }

  return (
    <>
    <main className='main'>
      <Header correct={correct} />
      <List correctAnswer={correctAnswer} />
      <Footer corrrect={correct} />
      </main>
    </>
  );
}

//----------to run make sure u are in the music quizz folder and run npm start in the terminal------------

export default App;
