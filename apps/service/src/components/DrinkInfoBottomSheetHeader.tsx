import {DrinkCardType} from "./DrinkCard";
import styled from "@emotion/styled";
import {Icon} from "design-system";

interface DrinkInfoBottomSheetHeaderProps {
  drinkCardType: DrinkCardType;
  onCloseClick(): void;
}

function DrinkInfoBottomSheetHeader({drinkCardType, onCloseClick}: DrinkInfoBottomSheetHeaderProps) {
  return  (
      <SheetHeader>
        <DrinkTypeIcon name={drinkCardType}/>
        <CloseWrapper onClick={onCloseClick}>
          <Icon name={"close"}/>
        </CloseWrapper>
      </SheetHeader>
  )
}

const SheetHeader = styled.div`
  display: flex;
  padding: 14px 0;
`;

const DrinkTypeIcon = styled(Icon)`
  margin-right: auto;
`;

const CloseWrapper = styled.button`
  background: none;
  border: none;
`;

export default DrinkInfoBottomSheetHeader;
