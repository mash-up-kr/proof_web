import styled from "@emotion/styled";
import React from "react";
import {
  theme,
  Text,
  BottomSheet,
  Button,
  ButtonHierarchy,
} from "design-system";

function InstallAppBottomSheet() {
  return (
    <BottomSheet
      headerProps={{
        children: null,
      }}
      fullHeight={false}
    >
      <BottomSheetContainer>
        <Text type={"h3"} style={{ marginBottom: 8 }} textAlign="center">
          {"상황별로 나랑 잘 맞는 술, 저장해보세요!"}
        </Text>
        <Text
          type="body3"
          style={{ marginBottom: 24 }}
          textAlign="center"
          color={theme.palette.gray200}
        >
          {"proof에서 지금 시작해요."}
        </Text>
        <Button fullWidth hierarchy={ButtonHierarchy.Primary}>
          {"앱 설치하기"}
        </Button>
      </BottomSheetContainer>
    </BottomSheet>
  );
}
const BottomSheetContainer = styled.div`
  width: 100%;
  margin-block: 40px;
`;

export default InstallAppBottomSheet;
