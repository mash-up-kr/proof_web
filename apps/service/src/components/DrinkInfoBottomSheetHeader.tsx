import styled from "@emotion/styled";
import {Icon} from "design-system";
import {IconName} from "design-system/components/Icon";

interface DrinkInfoBottomSheetHeaderProps {
  drinkCardIcon: IconName;
  onCloseClick(): void;
}

function DrinkInfoBottomSheetHeader({drinkCardIcon, onCloseClick}: DrinkInfoBottomSheetHeaderProps) {
  return  (
      <SheetHeader>
        <DrinkTypeIcon name={drinkCardIcon}/>
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
