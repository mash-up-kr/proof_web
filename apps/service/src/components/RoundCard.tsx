import styled from "@emotion/styled";
import { Icon, Text, theme } from "design-system";

export interface Round {
  title: string;
  count: number;
}

interface RoundCardProps extends React.ComponentProps<"li"> {
  round: Round;
  isActive?: boolean;
}

function RoundCard({ round, isActive = false, ...restProps }: RoundCardProps) {
  return (
    <Wrapper isActive={isActive} {...restProps}>
      <RoundImage
        src={`/round${round.count}.png`}
        alt={`round ${round.count} icon`}
        isActive={isActive}
      />
      <Description>
        <Text type="body3" color={theme.palette.gray200}>
          {round.title}
        </Text>
        <Text type="h3" color={theme.colors.text.special}>
          {round.count}강
        </Text>
      </Description>
      <RightIcon name="directionRight" />
    </Wrapper>
  );
}

const Wrapper = styled.li<{ isActive: boolean }>`
  width: 100%;
  padding: ${theme.padding.md}px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: ${(props) => {
    if (props.isActive) {
      return props.theme.palette.purple300;
    }
    return props.theme.palette.gray500;
  }};
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-sizing: border-box;
`;

const RoundImage = styled.img<{ isActive: boolean }>`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: contain;
  background-color: ${(props) => {
    if (props.isActive) return "rgba(28, 28, 38, 0.7)";
    return "transparent";
  }};
`;

const RightIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 28px;
  transform: translateY(-50%);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default RoundCard;
