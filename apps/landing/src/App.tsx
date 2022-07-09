import styled from "@emotion/styled";
import useInitAmplitude from "hooks/useInitAmplitude";

function App() {
  useInitAmplitude();

  return <TitleWrap>HEELO WORLD</TitleWrap>;
}

const TitleWrap = styled.h1`
  color: ${(props) => props.theme.testColor};
`;

export default App;
