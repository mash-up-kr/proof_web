import styled from "@emotion/styled";
import {palette} from "design-system/theme";
import {Text} from "design-system";

interface CompetitionBarProps {
  firstItemText: string;
  firstItemValue: number;
  secondItemText: string;
  secondItemValue: number;
}

function CompetitionBar({firstItemText, firstItemValue, secondItemText, secondItemValue}: CompetitionBarProps) {
  return (
      <Wrapper>
        <ItemWrapper>
          <ItemText type={"body4"}>{firstItemText}</ItemText>
          <ItemValue type={"body7"}>{firstItemValue}</ItemValue>
        </ItemWrapper>
        <div>
          <ItemText type={"body4"}>{secondItemText}</ItemText>
          <ItemValue type={"body7"}>{secondItemValue}</ItemValue>
        </div>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 52px;
  padding: 8px 16px;
  background: ${palette.gray500};
  border-radius: 8px;
`;

const ItemWrapper = styled.div`
  margin-right: auto;
`;

const ItemText = styled(Text)`
  font-weight: 600;
`;

const ItemValue = styled(Text)`
  font-weight: 400;
`;

export default CompetitionBar;
