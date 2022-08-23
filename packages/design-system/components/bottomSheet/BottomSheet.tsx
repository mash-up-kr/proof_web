import styled from "@emotion/styled";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { BottomSheetHeader } from "./BottomSheetHeader";
import theme from "../../theme";
import { useBottomSheet } from "./useBottomSheet";

export const MIN_Y = 48;

interface BottomSheetProps {
  headerProps: React.ComponentProps<typeof BottomSheetHeader>;
  fullHeight?: boolean;
}

function BottomSheet(props: PropsWithChildren<BottomSheetProps>): JSX.Element {
  const { headerProps, fullHeight = true } = props;
  const { sheet, sheetHeader } = useBottomSheet();

  const [innerHeight, setInnerHeight] = useState("");

  useEffect(() => {
    setInnerHeight(`${window.innerHeight}px`);
  }, []);

  return (
    <Wrapper ref={sheet} height={fullHeight ? innerHeight : "auto"}>
      <BottomSheetHeader ref={sheetHeader} {...headerProps}>
        {headerProps.children}
      </BottomSheetHeader>
      <BottomSheetContent>{props.children}</BottomSheetContent>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  z-index: ${theme.zIndex.bottomSheet};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ height }) => height};
  padding: 0 24px;
  transform: translateY(${MIN_Y}px);
  border-radius: 20px 20px 0 0;
  background-color: ${theme.palette.gray600};
`;

const BottomSheetContent = styled.div`
  overflow: auto;
  padding-bottom: 40px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default BottomSheet;
