import styled from "@emotion/styled";
import React from "react";
import { BottomSheet, Tag, Text, theme } from "design-system";
import { IconName } from "design-system/components/Icon";
import DrinkInfoBottomSheetHeader from "./DrinkInfoBottomSheetHeader";
import DrinkMetaData from "./DrinkMetaData";
import CompetitionBar from "./CompetitionBar";
import { DrinkWithRound } from "./DrinkCard";
import { useGetDrinkInfoById } from "../api/query";
import { DrinkEvaluationDto } from "../@types/api/drinkEvaluation";

interface DrinkInfoBottomSheetProps {
  selectedDrink: DrinkWithRound;
  evaluation: DrinkEvaluationDto;
  drinkCardIcon: IconName;
  onClose(): void;
}

function DrinkInfoBottomSheet({
  selectedDrink,
  drinkCardIcon,
  evaluation,
  onClose,
}: DrinkInfoBottomSheetProps) {
  const { id, name, abv, category } = selectedDrink;
  const result = useGetDrinkInfoById(id);

  if (result.isLoading) return null;

  const drinkData = result.data;

  const isReviewTopicsExist = (evaluation.result?.situation.length ?? 0) > 0;
  const isEvaluationsExist = !!evaluation.result;

  return (
    <BottomSheet
      headerProps={{
        children: (
          <DrinkInfoBottomSheetHeader
            drinkCardIcon={drinkCardIcon}
            onCloseClick={onClose}
          />
        ),
      }}
      contentProps={{
        style: { marginBottom: 70 },
      }}
    >
      <Text style={{ marginTop: 4 }} type={"h1"}>
        {name}
      </Text>
      <DrinkMetaData
        abv={abv}
        categoryName={category}
        origin={drinkData?.origin ?? ""}
      />
      <DrinkInformation>
        <Text type={"h4"}>정보</Text>
        <Text
          style={{ marginTop: 16 }}
          type={"body3"}
          color={theme.palette.gray100}
        >
          {drinkData?.description ?? ""}
        </Text>
      </DrinkInformation>
      {isReviewTopicsExist && (
        <DrinkReviewTopics>
          <Text type={"h4"}>이럴 때 마셨어요</Text>
          <ReviewTopicTags tags={evaluation.result?.situation ?? []} />
        </DrinkReviewTopics>
      )}
      <DrinkReviewStatistics>
        <Text type={"h4"}>이렇게 표현했어요</Text>
        {isEvaluationsExist ? (
          <CompetitionBarWrapper>
            <CompetitionBar
              firstItemText={"달아요"}
              firstItemValue={evaluation.result?.isBitter.Sweet ?? 0}
              secondItemText={"써요"}
              secondItemValue={evaluation.result?.isBitter.Bitter ?? 0}
            />
            <CompetitionBar
              firstItemText={"가벼워요"}
              firstItemValue={evaluation.result?.isHeavy.Light ?? 0}
              secondItemText={"무거워요"}
              secondItemValue={evaluation.result?.isHeavy.Heavy ?? 0}
            />
            <CompetitionBar
              firstItemText={"은은함"}
              firstItemValue={evaluation.result?.isStrong.Mild ?? 0}
              secondItemText={"진한 술맛"}
              secondItemValue={evaluation.result?.isStrong.Strong ?? 0}
            />
            <CompetitionBar
              firstItemText={"부드러운 목넘김"}
              firstItemValue={evaluation.result?.isBurning.Smooth ?? 0}
              secondItemText={"화끈한 목넘김"}
              secondItemValue={evaluation.result?.isBurning.Burning ?? 0}
            />
          </CompetitionBarWrapper>
        ) : (
          <EmptyReviewWrapper>
            <EmptyReviewImage src={"/Review IMG.png"} />
            <Text style={{ marginTop: 12 }} type={"h3"} textAlign={"center"}>
              아직 리뷰가 없어요 :(
            </Text>
            <Text
              style={{ marginTop: 4 }}
              type={"body3"}
              color={theme.palette.gray100}
            >
              이 술의 첫번째 리뷰어가 되어보세요!
            </Text>
          </EmptyReviewWrapper>
        )}
      </DrinkReviewStatistics>
    </BottomSheet>
  );
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

const CompetitionBarWrapper = styled.div`
  margin-top: 16px;
`;

export default DrinkInfoBottomSheet;
