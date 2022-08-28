import styled from "@emotion/styled";
import React, {ComponentProps} from "react";
import {BottomSheet, Tag, Text, theme} from "design-system";
import {IconName} from "design-system/components/Icon";
import DrinkInfoBottomSheetHeader from "./DrinkInfoBottomSheetHeader";
import DrinkMetaData from "./DrinkMetaData";
import CompetitionBar from "./CompetitionBar";
import {useGetDrinkEvaluationById} from "../api/query";
import {DrinkWithRound} from "./DrinkCard";

interface DrinkInfoBottomSheetProps {
  selectedDrink: DrinkWithRound;
  drinkCardIcon: IconName;
  drinkName: string;
  drinkMetaData: ComponentProps<typeof DrinkMetaData>;
  onClose(): void;
}

function DrinkInfoBottomSheet({selectedDrink, drinkCardIcon, drinkName, drinkMetaData, onClose}: DrinkInfoBottomSheetProps) {
  const {id, info} = selectedDrink;
  const {data, isLoading} = useGetDrinkEvaluationById(id);

  if (isLoading || !data) return <div>Loading...</div>;

  const isReviewTopicsExist = (data.result?.situation.length ?? 0) > 0;
  const isEvaluationsExist = !!data.result;

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
          {info}
        </Text>
      </DrinkInformation>
      {isReviewTopicsExist && (
        <DrinkReviewTopics>
          <Text type={"h4"}>이럴 때 마셨어요</Text>
          <ReviewTopicTags tags={data.result?.situation ?? []}/>
        </DrinkReviewTopics>
      )}
      <DrinkReviewStatistics>
        <Text type={"h4"}>이렇게 표현했어요</Text>
        {isEvaluationsExist ? (
          <>
            <CompetitionBar
              firstItemText={"달아요"}
              firstItemValue={data.result?.isBitter.Sweet ?? 0}
              secondItemText={"써요"}
              secondItemValue={data.result?.isBitter.Bitter ?? 0}
            />
            <CompetitionBar
              firstItemText={"가벼워요"}
              firstItemValue={data.result?.isHeavy.Light ?? 0}
              secondItemText={"무거워요"}
              secondItemValue={data.result?.isHeavy.Heavy ?? 0}
            />
            <CompetitionBar
              firstItemText={"은은함"}
              firstItemValue={data.result?.isStrong.Mild ?? 0}
              secondItemText={"진한 술맛"}
              secondItemValue={data.result?.isStrong.Strong ?? 0}
            />
            <CompetitionBar
              firstItemText={"부드러운 목넘김"}
              firstItemValue={data.result?.isBurning.Smooth ?? 0}
              secondItemText={"화끈한 목넘김"}
              secondItemValue={data.result?.isBurning.Burning ?? 0}
            />
          </>
        ) : (
          <EmptyReviewWrapper>
            <EmptyReviewImage src={'/Review IMG.png'}/>
            <Text style={{marginTop: 12}} type={"h3"} textAlign={"center"}>
              아직 리뷰가 없어요 :(
            </Text>
            <Text style={{marginTop: 4}} type={"body3"} color={theme.palette.gray100}>
              이 술의 첫번째 리뷰어가 되어보세요!
            </Text>
          </EmptyReviewWrapper>
        )}
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
