import QuestionRow from "./QuestionRow"

export default function List({questions}) {

  const questionMapping = () => questions.map((questionInstance) => {
//  console.log(questionInstance.question)
// let question = questioninstance.question
    return <QuestionRow 
    question={questionInstance.question}
    rightanswer={questionInstance.rightanswer}
    wronganswer={questionInstance.wronganswer} />
  })

    return (
   <>
   {questionMapping()}
   </> 
)
}