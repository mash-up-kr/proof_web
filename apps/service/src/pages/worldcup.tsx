import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {BottomButton, Text} from "design-system";
import * as React from "react";
import {Header} from "../components";
import DrinkCard, {Drink} from "../components/DrinkCard";
import DrinkInfoBottomSheet from "../components/DrinkInfoBottomSheet";

const dummy1: Drink = {
  id: 2,
  name: "버번카운티 브랜드 스타우트 2018 사이즈가넘어가게만들기",
  abv: 15.2,
  imageUrl:
      "https://beer-api-prod.idkulab.com/media/drinks/bourbon-county-2018.png",
  category: {
    id: 2,
    name: "Beer",
    imageUrl:
        "https://zuzu-resource.s3.ap-northeast-2.amazonaws.com/drinks-category/category_beer.png",
  },
};
const dummy2: Drink = {
  id: 3,
  name: "펑크 아이피에이",
  abv: 5.6,
  imageUrl:
      "https://beer-api-prod.idkulab.com/media/drinks/brewdong-punk-ipa.png",
  category: {
    id: 2,
    name: "Beer",
    imageUrl:
        "https://zuzu-resource.s3.ap-northeast-2.amazonaws.com/drinks-category/category_beer.png",
  },
};

const WorldCup = () => {
  const [isActive, setIsActive] = React.useState<boolean[]>([false, false]);

  const handleClickDrinkCard = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const id = Number(e.currentTarget.id);
    const nextIsActive = [...isActive];
    nextIsActive[+!id] = false;
    nextIsActive[id] = !nextIsActive[id];
    setIsActive(nextIsActive);
  };

  return (
    <>
      <DrinkInfoBottomSheet drinkCardType={"typeA"} drinkName={dummy1.name}/>
      <Layout>
        <Header type="prev" title="8강"/>
        <TitleWrapper>
          <Text type="h1" textAlign="center">
            비 오는 날씨엔
          </Text>
          <Text type="h1" textAlign="center">
            어떤 술이 더 끌리나요?
          </Text>
        </TitleWrapper>
        <CandidateWrapper>
          <DrinkCard
              id="0"
              type="typeA"
              drink={dummy1}
              isActive={isActive[0]}
              onClick={handleClickDrinkCard}
          />
          <DrinkCard
              id="1"
              type="typeB"
              drink={dummy2}
              isActive={isActive[1]}
              onClick={handleClickDrinkCard}
          />
        </CandidateWrapper>
        <BottomButton isActive={isActive[0] || isActive[1]}>
          선택하기
        </BottomButton>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  ${({theme}) => css`
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

    background-color: ${theme.colors.background};
  `}
`;

const TitleWrapper = styled.div`
  padding-top: 36px;
`;

const CandidateWrapper = styled.div`
  margin-inline: 24px;
  display: flex;
  gap: 18px;
`;

export default WorldCup;
