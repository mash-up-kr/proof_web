import {BottomSheet, Icon} from "design-system";
import {DrinkCardType} from "./DrinkCard";
import styled from "@emotion/styled";

interface DrinkInfoBottomSheetProps {
  drinkCardType: DrinkCardType;
}

function DrinkInfoBottomSheet({drinkCardType}: DrinkInfoBottomSheetProps) {
  const renderSheetHeader = () => (
      <SheetHeader>
        <DrinkTypeIcon name={drinkCardType}/>
        <CloseWrapper>
          <Icon name={"close"}/>
        </CloseWrapper>
      </SheetHeader>
  )

  return (
      <BottomSheet headerChildren={renderSheetHeader()}>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </BottomSheet>
  )
}

const SheetHeader = styled.div`
  display: flex;
  padding: 14px 0;
`

const DrinkTypeIcon = styled(Icon)`
  margin-right: auto;
`

const CloseWrapper = styled.button`
  background: none;
  border: none;
`

export default DrinkInfoBottomSheet;
