import setaPlay from "../../assets/images/seta_play.png";
import setaVirar from "../../assets/images/seta_virar.png";
import styled from "styled-components";
import { useState } from "react";
import ResultButton from "./ResultButton";

const Question = ({ question, answer, index }) => {
  const [closeQuestion, setCloseQuestion] = useState(true);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openAnswer, setOpenAnswer] = useState(false);
  function showQuestion() {
    setCloseQuestion(!closeQuestion);
    setOpenQuestion(!openQuestion);
  }
  function showAnswer() {
    setOpenAnswer(!openAnswer);
  }
  return (
    <>
      <li>
        <ClosedQuestion closeQuestion={closeQuestion}>
          <p>Pergunta {index}</p>
          <img onClick={showQuestion} src={setaPlay}></img>
        </ClosedQuestion>
        {(openQuestion && !openAnswer) && (
          <OpenedQuestion>
            <p>{question}</p>
            <img src={setaVirar} onClick={showAnswer} />
          </OpenedQuestion>
        )}
        {openAnswer && (
          <OpenedQuestion>
            <p>{answer}</p>
            <footer>
              <ResultButton backgroundColor={'#FF3030'}>Não lembrei</ResultButton>
              <ResultButton backgroundColor={'#FF922E'}>Quase não lembrei</ResultButton>
              <ResultButton backgroundColor={'#2FBE34'}>Zap!</ResultButton>
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
  }
  img {
    cursor: pointer;
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
