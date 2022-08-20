import styled from "@emotion/styled";
import React, {ComponentProps} from "react";
import {BottomSheet, Tag, Text, theme} from "design-system";
import {IconName} from "design-system/components/Icon";
import DrinkInfoBottomSheetHeader from "./DrinkInfoBottomSheetHeader";
import DrinkMetaData from "./DrinkMetaData";

interface DrinkInfoBottomSheetProps {
  drinkCardIcon: IconName;
  drinkName: string;
  drinkMetaData: ComponentProps<typeof DrinkMetaData>;
  drinkInformation: string;
  onClose(): void;
}

function DrinkInfoBottomSheet({drinkCardIcon, drinkName, drinkMetaData, drinkInformation, onClose}: DrinkInfoBottomSheetProps) {
  return (
    <BottomSheet headerChildren={<DrinkInfoBottomSheetHeader drinkCardIcon={drinkCardIcon} onCloseClick={onClose}/>}>
      <DrinkName type={"h1"}>{drinkName}</DrinkName>
      <DrinkMetaData {...drinkMetaData}/>
      <DrinkInformation>
        <Text type={"h4"}>정보</Text>
        <DrinkInformationContent type={"body3"} color={theme.palette.gray100}>
          {drinkInformation}
        </DrinkInformationContent>
      </DrinkInformation>
      <DrinkReviewTopics>
        <Text type={"h4"}>이럴 때 마셨어요</Text>
        <ReviewTopicTags tags={["대낮에", "한밤에", "친구와", "연인과"]} />
      </DrinkReviewTopics>
      <DrinkReviewStatistics>
        <Text type={"h4"}>이렇게 표현했어요</Text>
        <EmptyReviewWrapper>
          <EmptyReviewImage src={'/Review IMG.png'}/>
          <EmptyReviewTitle type={"h3"} textAlign={"center"}>
            아직 리뷰가 없어요 :(
          </EmptyReviewTitle>
          <EmptyReviewText type={"body3"} color={theme.palette.gray100}>
            이 술의 첫번째 리뷰어가 되어보세요!
          </EmptyReviewText>
        </EmptyReviewWrapper>
      </DrinkReviewStatistics>
    </BottomSheet>
  )
}

const DrinkName = styled(Text)`
  margin-top: 4px;
`;

const DrinkInformation = styled.div`
  margin-top: 14px;
  padding: 16px 0 14px;
`;

const DrinkInformationContent = styled(Text)`
  margin-top: 16px;
`;

const DrinkReviewTopics = styled.div`
  margin-top: 2px;
  padding: 16px 0;
`;

const ReviewTopicTags = styled(Tag)`
  margin-top: 20px;
`;

const DrinkReviewStatistics = styled.div`
  margin-top: 36px;
`;

const EmptyReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 44px 58px;
  margin-bottom: 44px;
`;

const EmptyReviewImage = styled.img`
  width: 86px;
  height: 86px;
  margin: auto;
`;

const EmptyReviewTitle = styled(Text)`
  margin-top: 12px;
`;

const EmptyReviewText = styled(Text)`
  margin-top: 4px;
`;

export default DrinkInfoBottomSheet;
