import styled from "styled-components";
const ScreenContainer = styled.main`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: ${({ visible }) => visible ? "none" : "flex"};
  flex-direction: column;
  align-items: center;
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

export default ScreenContainer;
