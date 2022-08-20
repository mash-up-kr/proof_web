import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {BottomButton, Text, theme} from "design-system";
import * as React from "react";
import {Header} from "../components";
import DrinkCard, {Drink} from "../components/DrinkCard";
import DrinkInfoBottomSheet from "../components/DrinkInfoBottomSheet";
import {useState} from "react";

const dummy1: Drink = {
  id: 2,
  name: "버번카운티 브랜드 스타우트 2018 사이즈가넘어가게만들기",
  abv: 15.2,
  imageUrl:
      "https://beer-api-prod.idkulab.com/media/drinks/bourbon-county-2018.png",
  origin: '스페인',
  category: {
    id: 2,
    name: "Beer",
    imageUrl:
        "https://zuzu-resource.s3.ap-northeast-2.amazonaws.com/drinks-category/category_beer.png",
  },
  info: "밝은 옐로우 컬러에 상큼한 레몬 등의 푸릇한 과실향과 흰색 꽃향기가 풍성함. 매력포인트는 버터의 유질감과 스모키함이 어우러지는 부드러움"
};
const dummy2: Drink = {
  id: 3,
  name: "펑크 아이피에이",
  abv: 5.6,
  imageUrl:
      "https://beer-api-prod.idkulab.com/media/drinks/brewdong-punk-ipa.png",
  origin: '프랑스',
  category: {
    id: 2,
    name: "Beer",
    imageUrl:
        "https://zuzu-resource.s3.ap-northeast-2.amazonaws.com/drinks-category/category_beer.png",
  },
  info: "밝은 옐로우 컬러에 상큼한 레몬 등의 푸릇한 과실향과 흰색 꽃향기가 풍성함. 매력포인트는 버터의 유질감과 스모키함이 어우러지는 부드러움"
};

const WorldCup = () => {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [isBottomSheetOpened, setBottomSheetOpened] = useState(false);

  const handleDrinkCardClick = (drink: Drink) => {
    if (drink === selectedDrink) setSelectedDrink(null);
    else setSelectedDrink(drink);
  };

  return (
      <>
        {isBottomSheetOpened && selectedDrink && (
            <DrinkInfoBottomSheet
                drinkCardType={"typeA"}
                drinkName={selectedDrink.name}
                drinkInformation={selectedDrink.info}
                drinkMetaData={
                  {abv: selectedDrink.abv, categoryName: selectedDrink.category.name, origin: selectedDrink.origin}
                }
                onClose={() => setBottomSheetOpened(false)}
            />
        )}
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
                type="typeA"
                drink={dummy1}
                isActive={selectedDrink === dummy1}
                onClick={() => handleDrinkCardClick(dummy1)}
                onSearchIconClick={() => setBottomSheetOpened(true)}
            />
            <DrinkCard
                type="typeB"
                drink={dummy2}
                isActive={selectedDrink === dummy2}
                onClick={() => handleDrinkCardClick(dummy2)}
                onSearchIconClick={() => setBottomSheetOpened(true)}
            />
          </CandidateWrapper>
          <BottomButton isActive={!!selectedDrink}>
            선택하기
          </BottomButton>
        </Layout>
      </>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  background: linear-gradient(180deg, #3A2E72 0%, ${theme.palette.black} 40.88%);
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
