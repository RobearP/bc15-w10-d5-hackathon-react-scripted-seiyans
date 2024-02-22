import QuestionRow from "./QuestionRow";
import { questionData } from "../questiondata";

export default function List({ correctAnswer }) {
  const questionMapping = () =>
    questionData.map((questionInstance) => {
      return (
        <QuestionRow
          question={questionInstance.question}
          rightanswer={questionInstance.rightanswer}
          wronganswer={questionInstance.wronganswer}
          correctAnswer={correctAnswer}
        />
      );
    });

  return <>{questionMapping()}</>;
}
