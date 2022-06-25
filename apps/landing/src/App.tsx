import useInitAmplitude from "hooks/useInitAmplitude";
import styled from "@emotion/styled";

function App() {
  useInitAmplitude();

  return <TitleWrap>HEELO WORLD</TitleWrap>;
}

const TitleWrap = styled.h1`
  color: ${(props) => props.theme.testColor};
`;

export default App;
