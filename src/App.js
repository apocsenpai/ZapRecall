import { useState } from "react";
import MainDisplay from "./components/MainDisplay/MainDisplay";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";

function App() {
  const [visibleWelcomeScreen, setVisibleWelcomeScreen] = useState(true);

  function showMainDisplay() {
    setVisibleWelcomeScreen(!visibleWelcomeScreen);
  }
  return (
    <>
      <MainDisplay visibleWelcomeScreen={visibleWelcomeScreen} />
      <WelcomeScreen
        showMainDisplay={showMainDisplay}
        visibleWelcomeScreen={visibleWelcomeScreen}
      />
    </>
  );
}

export default App;
