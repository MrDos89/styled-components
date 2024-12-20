import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StyledComponents from "./styled/StyledComponents";
import PropsComponents from "./styled/PropsComponents";
import StyledDiv from "./styled/UserPorpsComponents";

function App() {
  return (
    <div>
      <h1>StyledComponents</h1>
      <StyledComponents />
      <h1>PropsComponents</h1>
      <PropsComponents />
      <StyledDiv dark={false} />
      <StyledDiv dark={true} />
    </div>
  );
}

export default App;
