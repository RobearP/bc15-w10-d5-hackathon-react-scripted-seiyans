export default function QuestionRow({question, rightanswer, wronganswer}) {
    console.log({question})
    return (
        <>
      <p>{question}</p>
      <p>{rightanswer}</p>
      <p>{wronganswer}</p>

        </>
    )
}