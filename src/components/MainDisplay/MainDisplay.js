import ScreenContainer from "./ScreenContainer";
import logo from "../../assets/images/logo.png";
import QuestionList from "./QuestionList/QuestionList";
import wrong from "../../assets/images/icone_erro.png";
import almost from "../../assets/images/icone_quase.png";
import right from "../../assets/images/icone_certo.png";
import cards from "./cards";
import { useState } from "react";

const MainDisplay = ({ visibleWelcomeScreen }) => {
  const [answeredList, setAnsweredList] = useState([]);
  const [resultList, setResultList] = useState([]);
  console.log(resultList)
  function showResultIcon(result) {
    if (result === "wrong") {
      return wrong;
    } else if (result === "almost") {
      return almost;
    }
    return right;
  }

  function answeredQuestion(questionIndex, value) {
    setAnsweredList([...answeredList, questionIndex]);
    setResultList([...resultList, value]);
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
        showResultIcon={showResultIcon}
      />
      <footer>
        <p>
          {answeredList.length}/{cards.length} CONCLUÍDOS
        </p>
        <div>
        {!resultList.length ? "" : resultList.map((r, index)=><img key={index} src={showResultIcon(r)} />)}
        </div>
      </footer>
    </ScreenContainer>
  );
};

export default MainDisplay;
