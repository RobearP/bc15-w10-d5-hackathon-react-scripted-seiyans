import './App.css';
import { questionData } from "./questiondata.js"; 
import Header from './components/Header.js'
import List from './components/List.js'
import Footer from './components/Footer.js'
import { useState } from 'react'
 
function App() {
  // const question = questionData.question
  // // console.log(questionData)
  // const [firstQuestion, setfirstQuestions] = useState(question)
  // console.log(firstQuestion)
  // const [wronganswer, setwronganswer] = useState(questionData.wronganswer)
  // const [rightanswer, setrightanswer] = useState(questionData.rightanswer)
  const [questions, setQuestions] = useState(questionData)
  // console.log(questions)
  return (
  <>
    <Header />
    <List 
    questions={questions}
    
    />
    <Footer />
  </>
  )
  }

export default App;
