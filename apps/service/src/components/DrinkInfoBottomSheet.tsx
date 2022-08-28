import styled from "@emotion/styled";
import React, {ComponentProps} from "react";
import {BottomSheet, Tag, Text, theme} from "design-system";
import {IconName} from "design-system/components/Icon";
import DrinkInfoBottomSheetHeader from "./DrinkInfoBottomSheetHeader";
import DrinkMetaData from "./DrinkMetaData";
import CompetitionBar from "./CompetitionBar";

interface DrinkInfoBottomSheetProps {
  drinkCardIcon: IconName;
  drinkName: string;
  drinkMetaData: ComponentProps<typeof DrinkMetaData>;
  drinkInformation: string;
  onClose(): void;
}

function DrinkInfoBottomSheet({drinkCardIcon, drinkName, drinkMetaData, drinkInformation, onClose}: DrinkInfoBottomSheetProps) {
  return (
    <BottomSheet
        headerProps={{
          children: (<DrinkInfoBottomSheetHeader drinkCardIcon={drinkCardIcon} onCloseClick={onClose}/>),
          style: {marginBottom: 70}
        }}
    >
      <Text style={{marginTop: 4}} type={"h1"}>{drinkName}</Text>
      <DrinkMetaData {...drinkMetaData}/>
      <DrinkInformation>
        <Text type={"h4"}>정보</Text>
        <Text style={{marginTop: 16}} type={"body3"} color={theme.palette.gray100}>
          {drinkInformation}
        </Text>
      </DrinkInformation>
      <DrinkReviewTopics>
        <Text type={"h4"}>이럴 때 마셨어요</Text>
        <ReviewTopicTags tags={["대낮에", "한밤에", "친구와", "연인과"]} />
      </DrinkReviewTopics>
      <DrinkReviewStatistics>
        <Text type={"h4"}>이렇게 표현했어요</Text>
        <EmptyReviewWrapper>
          <EmptyReviewImage src={'/Review IMG.png'}/>
          <Text style={{marginTop: 12}} type={"h3"} textAlign={"center"}>
            아직 리뷰가 없어요 :(
          </Text>
          <Text style={{marginTop: 4}} type={"body3"} color={theme.palette.gray100}>
            이 술의 첫번째 리뷰어가 되어보세요!
          </Text>
        </EmptyReviewWrapper>
        <CompetitionBar firstItemText={"달아요"} firstItemValue={223} secondItemText={"써요"} secondItemValue={89}/>
        <CompetitionBar firstItemText={"무거워요"} firstItemValue={50} secondItemText={"가벼워요"} secondItemValue={50}/>
        <CompetitionBar firstItemText={"은은함"} firstItemValue={12} secondItemText={"진한 술맛"} secondItemValue={300}/>
      </DrinkReviewStatistics>
    </BottomSheet>
  )
}

const DrinkInformation = styled.div`
  margin-top: 14px;
  padding: 16px 0 14px;
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
  margin-bottom: 52px;
`;

const EmptyReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 44px 58px;
`;

const EmptyReviewImage = styled.img`
  width: 86px;
  height: 86px;
  margin: auto;
`;

export default DrinkInfoBottomSheet;
