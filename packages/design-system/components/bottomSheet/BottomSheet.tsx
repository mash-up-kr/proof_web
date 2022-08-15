import styled from "@emotion/styled";
import {BottomSheetHeader} from "./BottomSheetHeader";
import theme from "../../theme";

export const MIN_Y = 48;
export const MAX_Y = window.innerHeight  - 36;
export const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y;

function BottomSheet(): JSX.Element {
  return (
      <Wrapper>
        <BottomSheetHeader/>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: ${theme.zIndex.bottomSheet};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${BOTTOM_SHEET_HEIGHT}px;
  
  border-radius: 20px 20px 0 0;
  background-color: ${theme.palette.gray600};
`

export default BottomSheet;
