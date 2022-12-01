import setaPlay from "../../../assets/images/seta_play.png";
import setaVirar from "../../../assets/images/seta_virar.png";
import styled from "styled-components";
import { useState } from "react";
import ResultButton from "./ResultButton";

const Question = ({
  question,
  answer,
  index,
  answeredQuestion,
  answeredList,
  showResultIcon,
}) => {
  const [closeQuestion, setCloseQuestion] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openAnswer, setOpenAnswer] = useState(false);
  const [result, setResult] = useState({});
  const buttonList = [
    { text: "Não lembrei", color: "#FF3030", value: "wrong", test: "no-btn" },
    {
      text: "Quase não lembrei",
      color: "#FF922E",
      value: "almost",
      test: "partial-btn",
    },
    { text: " Zap!", color: "#2FBE34", value: "right", test: "zap-btn" },
  ];

  function toggleQuestion(questionIndex) {
    setCloseQuestion(
      answeredList.includes(questionIndex) ? true : !closeQuestion
    );
    setOpenQuestion(
      answeredList.includes(questionIndex) ? false : !openQuestion
    );
  }
  function toogleAnswer() {
    setOpenAnswer(!openAnswer);
  }
  function changeClosedQuestionStyle(resultValue, color) {
    setResult({ ...result, resultValue: resultValue, color: color });
  }
  function selectDataTest(result) {
    if (result === "wrong") {
      return "no-icon";
    } else if (result === "almost") {
      return "partial-icon";
    }
    return "zap-icon";
  }

  return (
    <>
      <li data-test="flashcard">
        <ClosedQuestion
          resultValue={result.resultValue}
          color={result.color}
          closeQuestion={closeQuestion}
        >
          <p data-test="flashcard-text">Pergunta {index}</p>
          {!answeredList.includes(index) && (
            <img
              data-test="play-btn"
              onClick={() => toggleQuestion(index)}
              src={setaPlay}
            />
          )}
          {answeredList.includes(index) && (
            <img
              data-test={selectDataTest(result.resultValue)}
              src={showResultIcon(result.resultValue)}
            />
          )}
        </ClosedQuestion>
        {openQuestion && !openAnswer && (
          <OpenedQuestion>
            <p data-test="flashcard-text">{question}</p>
            <img data-test="turn-btn" src={setaVirar} onClick={toogleAnswer} />
          </OpenedQuestion>
        )}
        {openQuestion && openAnswer && (
          <OpenedQuestion>
            <p data-test="flashcard-text">{answer}</p>
            <footer>
              {buttonList.map(({ text, color, value, test }) => (
                <ResultButton
                  key={value}
                  changeClosedQuestionStyle={changeClosedQuestionStyle}
                  index={index}
                  toogleAnswer={toogleAnswer}
                  toggleQuestion={toggleQuestion}
                  answeredQuestion={answeredQuestion}
                  backgroundColor={color}
                  value={value}
                  test={test}
                >
                  {text}
                </ResultButton>
              ))}
            </footer>
          </OpenedQuestion>
        )}
      </li>
    </>
  );
};

const ClosedQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${({ closeQuestion }) => (closeQuestion ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    text-decoration: ${({ resultValue }) => resultValue && "line-through"};
    color: ${({ color }) => color};
  }
  img {
    cursor: ${({ resultValue }) => !resultValue && "pointer"};
  }
`;

const OpenedQuestion = styled.div`
  width: 300px;
  margin: 20px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-self: center;
    margin-top: 20px;
  }
`;

export default Question;
