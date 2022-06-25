import { useState } from "react";
import styled from "@emotion/styled";

function App() {
  return <TitleWrap>HEELOWORLD</TitleWrap>;
}

const TitleWrap = styled.h1`
  color: ${props => props.theme.testColor}
`

export default App;
