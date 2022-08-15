import styled from "@emotion/styled";
import {PropsWithChildren, useEffect, useState} from "react";
import {BottomSheetHeader} from "./BottomSheetHeader";
import theme from "../../theme";
import {useBottomSheet} from "./useBottomSheet";

export const MIN_Y = 48;

function BottomSheet(props: PropsWithChildren<{}>): JSX.Element {
  const { sheet, handleTouchStart, handleTouchMove, handleTouchEnd } = useBottomSheet();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
      <Wrapper ref={sheet} height={height}>
        <BottomSheetHeader onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}/>
        <BottomSheetContent>
          {props.children}
        </BottomSheetContent>
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
  padding: 0 24px;
  transform: translateY(${MIN_Y}px);
  
  border-radius: 20px 20px 0 0;
  background-color: ${theme.palette.gray600};
`

const BottomSheetContent = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

export default BottomSheet;
