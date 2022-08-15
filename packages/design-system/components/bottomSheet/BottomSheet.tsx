import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {BottomSheetHeader} from "./BottomSheetHeader";
import theme from "../../theme";
import {useBottomSheet} from "./useBottomSheet";

export const MIN_Y = 48;

function BottomSheet(): JSX.Element {
  const { sheet } = useBottomSheet();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
      <Wrapper ref={sheet} height={height}>
        <BottomSheetHeader/>
      </Wrapper>
  );
}

const Wrapper = styled.div<{height: number}>`
  display: flex;
  flex-direction: column;
  z-index: ${theme.zIndex.bottomSheet};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.height}px;
  
  border-radius: 20px 20px 0 0;
  background-color: ${theme.palette.gray600};
`

export default BottomSheet;
