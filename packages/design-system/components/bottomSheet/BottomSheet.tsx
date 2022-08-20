import styled from "@emotion/styled";
import React, {PropsWithChildren, useEffect, useState} from "react";
import {BottomSheetHeader} from "./BottomSheetHeader";
import theme from "../../theme";
import {useBottomSheet} from "./useBottomSheet";

export const MIN_Y = 48;

interface BottomSheetProps {
  headerProps?: React.ComponentProps<typeof BottomSheetHeader>;
  contentProps?: React.ComponentProps<typeof BottomSheetContent>;
}

function BottomSheet({headerProps, contentProps, children}: PropsWithChildren<BottomSheetProps>): JSX.Element {
  const { sheet, sheetHeader } = useBottomSheet();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
      <Wrapper ref={sheet} height={height}>
        <BottomSheetHeader ref={sheetHeader} {...headerProps}>{headerProps?.children}</BottomSheetHeader>
        <BottomSheetContent {...contentProps}>
          {children}
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

const BottomSheetContent = styled.div<React.ComponentProps<'div'>>`
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

export default BottomSheet;
