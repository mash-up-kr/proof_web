import styled from "@emotion/styled";
import { palette } from "design-system/theme";
import { Text } from "design-system";

interface CompetitionBarProps {
  firstItemText: string;
  firstItemValue: number;
  secondItemText: string;
  secondItemValue: number;
}

function CompetitionBar({
  firstItemText,
  firstItemValue,
  secondItemText,
  secondItemValue,
}: CompetitionBarProps) {
  const firstRate =
    firstItemValue === 0
      ? 0
      : (firstItemValue / (firstItemValue + secondItemValue)) * 100;
  const secondRate =
    secondItemValue === 0
      ? 0
      : (secondItemValue / (firstItemValue + secondItemValue)) * 100;

  return (
    <Wrapper>
      <LeftBar isActive={firstItemValue >= secondItemValue} rate={firstRate} />
      <RightBar
        isActive={secondItemValue >= firstItemValue}
        rate={secondRate}
      />
      <ItemWrapper isFirst>
        <ItemText type={"body4"}>{firstItemText}</ItemText>
        <ItemValue type={"body7"}>{firstItemValue}</ItemValue>
      </ItemWrapper>
      <ItemWrapper>
        <ItemText type={"body4"}>{secondItemText}</ItemText>
        <ItemValue type={"body7"} textAlign="end">
          {secondItemValue}
        </ItemValue>
      </ItemWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  height: 52px;
  padding: 8px 16px;

  background: ${palette.gray500};
  border-radius: 8px;

  & + & {
    margin-top: 12px;
  }
`;

const LeftBar = styled.div<{ isActive: boolean; rate: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ rate }) => rate}%;
  height: 52px;

  background: ${({ isActive }) =>
    isActive
      ? "linear-gradient(270deg, #96B602 0%, rgba(186, 227, 72, 0) 100%)"
      : "none"};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const RightBar = styled.div<{ isActive: boolean; rate: number }>`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ rate }) => rate}%;
  height: 52px;

  background: ${({ isActive }) =>
    isActive
      ? "linear-gradient(90deg, #6748E3 0%, rgba(103, 72, 227, 0) 100%)"
      : "none"};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const ItemWrapper = styled.div<{ isFirst?: boolean }>`
  z-index: 999;
  margin-right: ${({ isFirst }) => (isFirst ? "auto" : 0)};
`;

const ItemText = styled(Text)`
  font-weight: 600;
`;

const ItemValue = styled(Text)`
  font-weight: 400;
`;

export default CompetitionBar;
