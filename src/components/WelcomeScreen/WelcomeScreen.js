import ScreenContainer from "../MainDisplay/ScreenContainer";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";

const WelcomeScreen = ({ showMainDisplay, visibleWelcomeScreen }) => {
  return (
    <WelcomeContainer visible={visibleWelcomeScreen}>
      <img src={logo} />
      <p>ZapRecall</p>
      <button data-test="start-btn" onClick={showMainDisplay}>
        Iniciar Recall!
      </button>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled(ScreenContainer)`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;
  padding-bottom: 0px;
  gap: 40px;
  p {
    font-family: "Righteous";
    font-size: 36px;
    text-align: center;
    color: #ffffff;
  }
  button {
    height: 54px;
    width: 246px;
    border-radius: 5px;
    background-color: #fff;
    color: #d70900;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px 0px #00000026;
    font-family: "Recursive";
    font-size: 18px;
    transition: 200ms ease;
    cursor: pointer;
    &:hover {
      opacity: 0.85;
    }
  }
`;

export default WelcomeScreen;
