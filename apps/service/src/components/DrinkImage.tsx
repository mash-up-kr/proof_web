import styled from "@emotion/styled";
import { Text, Icon, theme } from "design-system";
import { Vote } from "design-system/assets/svgs";
import { IconName } from "design-system/components/Icon";

interface DrinkImageProps {
  imgSrc: string;
  type: IconName;
  isActive?: boolean;
  select?: number;
  handleClickSearchIcon?: (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => void;
}

function DrinkImage({
  imgSrc,
  type,
  isActive = false,
  select,
  handleClickSearchIcon,
}: DrinkImageProps) {
  return (
    <Wrapper>
      <MainImage
        src={imgSrc}
        className={isActive ? "drink-img active" : "drink-img"}
        alt="world-cup-candidate"
      />
      <TypeIcon name={type} />
      <SearchIcon
        width={12}
        height={12}
        name="search"
        onClick={handleClickSearchIcon}
      />
      {isActive && (
        <ActiveGradient>
          <CheckIcon name="check" />
        </ActiveGradient>
      )}
      {type === "winner" && (
        <VoteDescription>
          <Vote />
          <Text type="body5">{select?.toLocaleString()}명이 선택했어요!</Text>
        </VoteDescription>
      )}
    </Wrapper>
  );
}

const ActiveGradient = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  background: linear-gradient(0deg, #13072f, #13072f);
  border-radius: 8px;
`;

const TypeIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 100;
`;

const SearchIcon = styled(Icon)`
  padding: 6px;
  z-index: ${theme.zIndex.cardOverlay};
  position: absolute;
  right: 12px;
  bottom: 12px;
  border-radius: 15px;
  background-color: ${theme.palette.gray500};
`;

const CheckIcon = styled(Icon)`
  z-index: ${theme.zIndex.cardOverlay};
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const VoteDescription = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: flex;
  gap: 4px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 52px;
`;

const MainImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 196px;
  border-radius: 8px;
  z-index: ${theme.zIndex.cardBody};
  object-fit: contain;
`;

export default DrinkImage;
