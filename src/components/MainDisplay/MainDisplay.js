import ScreenContainer from "./ScreenContainer";
import logo from "../../assets/images/logo.png";
import QuestionList from "./QuestionList/QuestionList";
import wrong from "../../assets/images/icone_erro.png";
import almost from "../../assets/images/icone_quase.png";
import right from "../../assets/images/icone_certo.png";
import party from "../../assets/images/party.png";
import sad from "../../assets/images/sad.png";
import cards from "./cards";
import { useState } from "react";

const MainDisplay = ({ visibleWelcomeScreen }) => {
  const [answeredList, setAnsweredList] = useState([]);
  const [resultList, setResultList] = useState([]);

  function showResultIcon(result) {
    if (result === "wrong") {
      return wrong;
    } else if (result === "almost") {
      return almost;
    }
    return right;
  }
  function selectDataTest(result) {
    if (result === "wrong") {
      return "no-icon";
    } else if (result === "almost") {
      return "partial-icon";
    }
    return "zap-icon";
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
      <footer data-test="footer">
        {resultList.length === cards.length &&
          (!resultList.includes("wrong") ? (
            <ResultMessage
              data-test="finish-text"
              text={"Parabéns"}
              icon={party}
              message={"Você não esqueceu de nenhum flashcard!"}
            />
          ) : (
            <ResultMessage
              data-test="finish-text"
              text={"Putz..."}
              icon={sad}
              message={"Ainda faltam alguns... Mas não desanime!"}
            />
          ))}
        <p>
          {answeredList.length}/{cards.length} CONCLUÍDOS
        </p>
        <div>
          {resultList.map((r, index) => (
            <img
              key={index}
              data-test={selectDataTest(r)}
              src={showResultIcon(r)}
            />
          ))}
        </div>
      </footer>
    </ScreenContainer>
  );
};

const ResultMessage = ({ text, icon, message }) => {
  return (
    <header>
      <p>
        <img src={icon} /> {text}
      </p>
      <p>{message}</p>
    </header>
  );
};

export default MainDisplay;
