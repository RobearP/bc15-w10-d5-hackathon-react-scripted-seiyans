export default function QuestionRow(questions) {
    console.log(questions[0].question)
    return (
        <>
        <p> {questions[0].question}</p>
        <p> {questions[1].question}</p>


        </>
    )
}