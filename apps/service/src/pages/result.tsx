import styled from "@emotion/styled";
import { Text } from "design-system";
import * as React from "react";
import { NextPage } from "next";
import { FloatingButtons, Header, Rankings } from "../components";
import { ROUNDS } from "../dummy/rounds";
import { DRINK_CARDS } from "../dummy/drinkCards";
import WinnerCard from "../components/WinnerCard";
import { useNavigate, useWorldCup } from "../hooks";
import { DrinkWithRound } from "../components/DrinkCard";

interface Props {
  userAgent: string;
}

// FIXME:: 타입 추론
const Result: NextPage<Props> = ({ userAgent }) => {
  const [isFromNativeApp, setIsFromNativeApp] = React.useState<boolean>(false);
  const [isShared, setIsShared] = React.useState<boolean>(false);
  const [winnerDrink, setWinnerDrink] = React.useState<DrinkWithRound>(
    DRINK_CARDS[2] as DrinkWithRound
  );
  const navigate = useNavigate();
  const { getWinnerDrink, revertToPrevRoundState } = useWorldCup();

  React.useEffect(() => {
    // TODO: result는 새로고침이 될 수 있으므로 param으로 Drink id를 가져와야 할 듯
    const winnerDrink = getWinnerDrink();
    if (winnerDrink) {
      setWinnerDrink(winnerDrink);
    }
    // TODO: setIsFromNativeApp & setIsShared 설정, n초 후 BottomSheet
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: native임에 따라서 연동필요
  const handleClickHeaderPrevIcon = () => {
    revertToPrevRoundState();
    navigate.back();
  };

  return (
    <>
      <Header
        type="prev"
        title="결과"
        onClickIcon={handleClickHeaderPrevIcon}
      />
      <Title>
        <Text type="h1" textAlign="center">
          {`${isShared ? "친구" : "내"}가 선택한 최고의 술`}
        </Text>
      </Title>
      <WinnerCard drink={winnerDrink ?? DRINK_CARDS[3]} />
      <FloatingButtons />
      <Rankings rounds={ROUNDS} drinks={DRINK_CARDS} />
    </>
  );
};

const Title = styled.div`
  padding-top: 36px;
  padding-inline: 24px;
`;

// Result.getInitialProps = async ({ req }: NextPageContext) => {
//   const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
//   return { userAgent };
// };

export default Result;
