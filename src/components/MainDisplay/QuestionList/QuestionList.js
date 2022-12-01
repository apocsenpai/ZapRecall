import Question from "../Question/Question";

const QuestionList = ({cards, answeredQuestion, answeredList, showResultIcon}) => {
  return (
    <ul>
      {cards.map(({ question, answer }, index) => (
        <Question key={question} showResultIcon={showResultIcon} answeredList={answeredList} answeredQuestion={answeredQuestion} question={question} answer={answer} index={index + 1} />
      ))}
    </ul>
  );
};

export default QuestionList;
