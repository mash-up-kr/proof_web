import styled from "@emotion/styled";
import { theme, Text, Tag } from "design-system";
import { IconName } from "design-system/components/Icon";
import React from "react";
import DrinkImage from "./DrinkImage";

export type DrinkCardType = "round" | "winner" | "ranking";
export interface Drink {
  id: number;
  name: string;
  abv: number;
  imageUrl: string;
  origin: string;
  info: string;
  category: string;
}

export interface DrinkWithRound extends Drink {
  rounds: number[];
}

interface DrinkCardProps extends React.ComponentProps<"div"> {
  type: DrinkCardType;
  drink: Drink;
  iconType: IconName;
  tags: string[];
  isActive?: boolean;
  isShowingTag?: boolean;
  hasSearchIcon?: boolean;
  onImageClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  hasWinnerIcon?: boolean;
  select?: number;
  onSearchIconClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

function DrinkCard({
  type,
  drink,
  iconType,
  isActive,
  tags,
  isShowingTag = true,
  hasSearchIcon = true,
  onImageClick,
  hasWinnerIcon,
  select = 1,
  onSearchIconClick,
  ...restProps
}: DrinkCardProps) {
  return (
    <Wrapper {...restProps}>
      <DrinkImage
        imgSrc={drink?.imageUrl}
        type={type}
        iconType={iconType}
        isActive={isActive}
        onImageClick={onImageClick}
        onSearchIconClick={onSearchIconClick}
        hasSearchIcon={hasSearchIcon}
        select={select}
        hasWinnerIcon={hasWinnerIcon}
      />
      <DescriptionWrapper>
        <BoldText type="body5" color={theme.colors.text.highlight}>
          {drink?.category}
        </BoldText>
        <Text type="body5" color={theme.colors.ui.divider}>
          |
        </Text>
        <AlcWrapper>
          <BoldText type="body5" color={theme.palette.purple50}>
            Alc
          </BoldText>
          <Text type="body5" color={theme.palette.purple50}>
            {drink?.abv}%
          </Text>
        </AlcWrapper>
      </DescriptionWrapper>
      <DrinkName display="-webkit-box" type="button1">
        {drink?.name}
      </DrinkName>
      {isShowingTag && <Tag tags={tags} shorten />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const DescriptionWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

const DrinkName = styled(Text)`
  margin: 8px auto;
  word-break: keep-all;
  min-height: 44.8px;

  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

const BoldText = styled(Text)`
  font-weight: 600;
`;

const AlcWrapper = styled.span`
  display: flex;
  gap: 2px;
`;

export default DrinkCard;
