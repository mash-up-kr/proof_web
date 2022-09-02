import styled from "@emotion/styled";
import React from "react";
import {
  theme,
  Text,
  BottomSheet,
  Button,
  ButtonHierarchy,
} from "design-system";
import { track } from "@amplitude/analytics-browser";

interface Props {
  onClose(): void;
}

function InstallAppBottomSheet({ onClose }: Props) {
  return (
    <BottomSheet fullHeight={false}>
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
          <Text
            type="body2"
            textAlign="center"
            color={theme.colors.text.special}
            onClick={() => {
              track("Tap Install");
              window.open(
                "https://play.google.com/store/apps/details?id=com.mashup.zuzu"
              );
            }}
          >
            {"앱 설치하기"}
          </Text>
        </Button>
        <SkipText
          type="body3"
          color={theme.palette.gray200}
          textAlign="center"
          onClick={onClose}
        >
          {"괜찮아요. 웹으로 볼게요."}
        </SkipText>
      </BottomSheetContainer>
    </BottomSheet>
  );
}
const BottomSheetContainer = styled.div`
  width: 100%;
  margin-block: 40px;
`;

const SkipText = styled(Text)`
  text-decoration: underline;
  margin-top: 16px;
`;

export default InstallAppBottomSheet;
