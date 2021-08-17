import React from "react";

import { GlobalStyle, StyledApp } from "./styles/StyledApp";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>React App</StyledApp>
    </>
  );
};

export default App;
