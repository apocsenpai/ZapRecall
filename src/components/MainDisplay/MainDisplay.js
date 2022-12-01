import ScreenContainer from "./ScreenContainer";
import logo from "../../assets/images/logo.png";
import QuestionList from "./QuestionList/QuestionList";
import cards from "./cards";
import { useState } from "react";

const MainDisplay = ({visibleWelcomeScreen}) => {
  const [answeredList, setAnsweredList] = useState([]);

  function answeredQuestion(questionIndex) {
    setAnsweredList([...answeredList, questionIndex]);
  }

  return (
    <ScreenContainer visible={visibleWelcomeScreen}>
      <header>
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
      </header>
      <QuestionList
        answeredList={answeredList}
        answeredQuestion={answeredQuestion}
        cards={cards}
      />
      <footer>
        <p>
          {answeredList.length}/{cards.length} CONCLUÍDOS
        </p>
      </footer>
    </ScreenContainer>
  );
};

export default MainDisplay;
