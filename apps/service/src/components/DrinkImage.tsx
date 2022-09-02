import styled from "@emotion/styled";
import { Text, Icon, theme } from "design-system";
import { Vote } from "design-system/assets/svgs";
import { IconName } from "design-system/components/Icon";
import { DrinkCardType } from "./DrinkCard";

const MIN_HEIGHT_BY_TYPE: { [key in DrinkCardType]: string } = {
  round: "196px",
  winner: "320px",
  ranking: "154px",
} as const;

interface DrinkImageProps {
  imgSrc: string;
  type: DrinkCardType;
  iconType: IconName;
  isActive?: boolean;
  hasSearchIcon?: boolean;
  select?: number;
  onImageClick?: React.ComponentProps<"div">["onClick"];
  onSearchIconClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

// TODO: Icon 색상 변경
function DrinkImage({
  imgSrc,
  type,
  iconType,
  isActive = false,
  select,
  hasSearchIcon = true,
  onImageClick,
  onSearchIconClick,
}: DrinkImageProps) {
  return (
    <Wrapper onClick={onImageClick}>
      <MainImage imgSrc={imgSrc} type={type} />
      <TypeIcon name={iconType} />
      {hasSearchIcon && (
        <>
          <SearchIconBackground />
          <SearchIcon
            width={16}
            height={16}
            name="search"
            onClick={onSearchIconClick}
          />
        </>
      )}
      {isActive && (
        <ActiveGradient>
          <CheckIcon name="check" />
        </ActiveGradient>
      )}
      {type === "winner" && (
        <VoteDescription>
          <Vote />
          <Text type="body5">
            {select?.toLocaleString() ?? 0}명이 선택했어요!
          </Text>
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
  position: absolute;
  z-index: ${theme.zIndex.cardOverlay};
  right: 12px;
  bottom: 12px;
  transform: translate(-50%, -50%);
`;

const SearchIconBackground = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 15px;
  position: absolute;
  right: 12px;
  bottom: 12px;
  background-color: ${theme.palette.gray500};
  z-index: ${theme.zIndex.cardOverlay};
  opacity: 0.7;
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
`;

const MainImage = styled.div<{
  imgSrc: string;
  type: DrinkCardType;
}>`
  width: ${({ type }) => (type === "ranking" ? "120px" : "100%")};
  min-height: ${({ type }) => MIN_HEIGHT_BY_TYPE[type]};
  background-image: ${({ imgSrc }) =>
    `linear-gradient(180deg, rgba(56, 58, 77, 0) 74.84%, rgba(28, 28, 38, 0.6) 100%), url(${imgSrc})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
`;

export default DrinkImage;
