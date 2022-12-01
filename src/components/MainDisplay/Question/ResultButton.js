import styled from "styled-components";

const ResultButton = ({ children, backgroundColor, changeClosedQuestionStyle, answeredQuestion, index, toggleQuestion, toogleAnswer, value }) => {
  return (
    <AnswerButton
      onClick={() => {
        answeredQuestion(index, value);
        toggleQuestion();
        toogleAnswer();
        changeClosedQuestionStyle(value, backgroundColor);
      }}
      backgroundColor={backgroundColor}
    >
      {children}
    </AnswerButton>
  );
};

const AnswerButton = styled.button`
  /* Você vai precisar trocar a cor dos botões e alguns textos!
  CINZA = "#333333"
*/

  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 5px;
  border: 1px solid ${({ backgroundColor }) => backgroundColor};
  padding: 5px;
  cursor: pointer;
  transition: 200ms ease;
  &:hover {
    opacity: 0.85;
  }
`;

export default ResultButton;
