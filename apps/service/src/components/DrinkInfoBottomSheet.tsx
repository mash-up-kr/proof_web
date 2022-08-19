import {BottomSheet, Text, theme} from "design-system";
import {DrinkCardType} from "./DrinkCard";
import styled from "@emotion/styled";
import DrinkInfoBottomSheetHeader from "./DrinkInfoBottomSheetHeader";
import React, {ComponentProps} from "react";
import DrinkMetaData from "./DrinkMetaData";

interface DrinkInfoBottomSheetProps {
  drinkCardType: DrinkCardType;
  drinkName: string;
  drinkMetaData: ComponentProps<typeof DrinkMetaData>;
  drinkInformation: string;
}

function DrinkInfoBottomSheet({drinkCardType, drinkName, drinkMetaData, drinkInformation}: DrinkInfoBottomSheetProps) {
  return (
    <BottomSheet headerChildren={<DrinkInfoBottomSheetHeader drinkCardType={drinkCardType}/>}>
      <DrinkName type={"h1"}>{drinkName}</DrinkName>
      <DrinkMetaData {...drinkMetaData}/>
      <DrinkInformation>
        <Text type={"h4"}>정보</Text>
        <DrinkInformationContent type={"body3"} color={theme.palette.gray100}>
          {drinkInformation}
        </DrinkInformationContent>
      </DrinkInformation>
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
`

export default DrinkInfoBottomSheet;
