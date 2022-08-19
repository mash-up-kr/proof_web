import {BottomSheet, Text} from "design-system";
import {DrinkCardType} from "./DrinkCard";
import styled from "@emotion/styled";
import DrinkInfoBottomSheetHeader from "./DrinkInfoBottomSheetHeader";

interface DrinkInfoBottomSheetProps {
  drinkCardType: DrinkCardType;
  drinkName: string;
}

function DrinkInfoBottomSheet({drinkCardType, drinkName}: DrinkInfoBottomSheetProps) {
  return (
    <BottomSheet headerChildren={<DrinkInfoBottomSheetHeader drinkCardType={drinkCardType}/>}>
      <DrinkName type={"h1"}>{drinkName}</DrinkName>
    </BottomSheet>
  )
}


const DrinkName = styled(Text)`
  margin-top: 4px;
`;

export default DrinkInfoBottomSheet;
