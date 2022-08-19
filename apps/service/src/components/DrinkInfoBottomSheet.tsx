import {BottomSheet, Text} from "design-system";
import {DrinkCardType} from "./DrinkCard";
import styled from "@emotion/styled";
import DrinkInfoBottomSheetHeader from "./DrinkInfoBottomSheetHeader";
import React, {ComponentProps} from "react";
import DrinkMetaData from "./DrinkMetaData";

interface DrinkInfoBottomSheetProps {
  drinkCardType: DrinkCardType;
  drinkName: string;
  drinkMetaData: ComponentProps<typeof DrinkMetaData>;
}

function DrinkInfoBottomSheet({drinkCardType, drinkName, drinkMetaData}: DrinkInfoBottomSheetProps) {
  return (
    <BottomSheet headerChildren={<DrinkInfoBottomSheetHeader drinkCardType={drinkCardType}/>}>
      <DrinkName type={"h1"}>{drinkName}</DrinkName>
      <DrinkMetaData {...drinkMetaData}/>
    </BottomSheet>
  )
}

const DrinkName = styled(Text)`
  margin-top: 4px;
`;

export default DrinkInfoBottomSheet;
