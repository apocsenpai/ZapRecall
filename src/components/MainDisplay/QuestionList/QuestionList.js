import Question from "../Question/Question";

const QuestionList = ({cards, answeredQuestion, answeredList}) => {
  return (
    <ul>
      {cards.map(({ question, answer }, index) => (
        <Question key={question} answeredList={answeredList} answeredQuestion={answeredQuestion} question={question} answer={answer} index={index + 1} />
      ))}
    </ul>
  );
};

export default QuestionList;
