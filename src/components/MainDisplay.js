import styled from "styled-components";
import logo from "../assets/images/logo.png";
import QuestionList from "./QuestionList/QuestionList";
import cards from "./cards";
import { useState } from "react";

const MainDisplay = () => {
  const [answeredList, setAnsweredList] = useState([]);

  function answeredQuestion(questionIndex) {
    setAnsweredList([...answeredList, questionIndex]);
  }

  return (
    <ScreenContainer>
      <header>
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
      </header>
      <QuestionList answeredList={answeredList} answeredQuestion={answeredQuestion} cards={cards} />
      <footer>
        <p>
          {answeredList.length}/{cards.length} CONCLUÍDOS
        </p>
      </footer>
    </ScreenContainer>
  );
};

const ScreenContainer = styled.main`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  header {
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
      width: 52px;
    }
    h1 {
      font-family: "Righteous";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      color: #ffffff;
      margin-left: 20px;
    }
  }
  & > footer {
    width: 100%;
    min-height: 50px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
  }
`;

export default MainDisplay;
