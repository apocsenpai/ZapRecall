import Question from "../Question/Question";
import cards from "../Question/cards";

const QuestionList = () => {

  return (
    <ul>
      {cards.map(({question, answer}, index)=><Question question={question} answer={answer} index={index+1}/>)}
    </ul>
  );
};



export default QuestionList;
