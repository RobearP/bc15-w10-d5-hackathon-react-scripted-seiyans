

export default function List({questions}) {

  const questionMapping = () => questions.map((questionInstance) => {
    return <QuestionRow 
    question={questionInstance.question}
    rightanswer={questionInstance.rightanswer}
    wrongquestion={questionInstance.wronganswer} />
  })

    return (
    
)
}