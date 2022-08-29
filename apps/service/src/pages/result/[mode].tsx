import styled from "@emotion/styled";
import { Text } from "design-system";
import * as React from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { useRecoilState } from "recoil";
import {
  Header,
  InstallAppBottomSheet,
  Rankings,
  ShareButtons,
} from "../../components";
import { DRINK_CARDS } from "../../dummy/drinkCards";
import WinnerCard from "../../components/WinnerCard";
import share from "../../utils/share";
import { useNavigate, useUserAgent, useWorldCup } from "../../hooks";
import DrinkInfoBottomSheet from "../../components/DrinkInfoBottomSheet";
import { DrinkWithRound } from "../../components/DrinkCard";
import { worldCupState as state } from "../../store";

const BASE_URL = `https://zuzu-web.vercel.app`;

interface Props {
  drinkId: string;
  mode: "view" | "shared";
}

const Result = ({ drinkId, mode }: Props) => {
  const router = useRouter();
  const navigate = useNavigate();
  const { userAgent } = useUserAgent();
  const { getWinnerDrink, revertToPrevRoundState } = useWorldCup();

  const [worldCupState] = useRecoilState(state);

  const [isInstallAppBottomSheetOpened, setIsInstallAppBottomSheetOpened] =
    React.useState<boolean>(false);
  const [winnerDrink, setWinnerDrink] = React.useState<DrinkWithRound>(
    DRINK_CARDS[2] as DrinkWithRound
  );
  const [isDrinkDetailBottomSheetOpened, setIsDrinkDetailBottomSheetOpened] =
    React.useState(false);

  const shared = mode === "shared";

  React.useEffect(() => {
    const winnerDrink = getWinnerDrink();
    if (winnerDrink) {
      setWinnerDrink(winnerDrink);
    }
    let timer = setTimeout(() => setIsInstallAppBottomSheetOpened(true), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // TODO: native임에 따라서 연동필요
  const handleClickHeaderPrevIcon = () => {
    revertToPrevRoundState();
    navigate.back();
  };

  const dataToShare: ShareData = {
    title: "Proof",
    text: "분위기에 취하고 맛에 취하는 우리, 프루프에서 술드컵을 진행해보세요. 자세한 내용은 다음 초대 링크에서 확인하세요.",
    url: `${BASE_URL}${router.pathname}?shared=true`,
  };

  const handleShare = async () => {
    const result = await share(dataToShare);
    if (result === "copiedToClipboard") {
      alert("링크를 클립보드에 복사했습니다.");
    } else if (result === "failed") {
      alert("공유하기가 지원되지 않는 환경입니다.");
    }
  };

  return (
    <>
      {!userAgent?.isAndroidWebView && isInstallAppBottomSheetOpened && (
        <InstallAppBottomSheet
          onClose={() => setIsInstallAppBottomSheetOpened(false)}
        />
      )}
      {isDrinkDetailBottomSheetOpened && (
        <DrinkInfoBottomSheet
          drinkCardIcon="typeA"
          drinkName={winnerDrink.name}
          drinkInformation={winnerDrink.info}
          drinkMetaData={{
            abv: winnerDrink.abv,
            categoryName: winnerDrink.category,
            origin: winnerDrink.origin,
          }}
          onClose={() => setIsDrinkDetailBottomSheetOpened(false)}
        />
      )}
      <Header
        type="prev"
        title="결과"
        onClickIcon={handleClickHeaderPrevIcon}
      />
      <Title>
        <Text type="h1" textAlign="center">
          {`${shared ? "친구" : "내"}가 선택한 최고의 술`}
        </Text>
      </Title>
      <WinnerCard
        drink={winnerDrink ?? DRINK_CARDS[3]}
        handleClickSearchIcon={() => setIsDrinkDetailBottomSheetOpened(true)}
      />
      <ShareButtons handleClickRightButton={handleShare} shared={shared} />
      {!shared && worldCupState.drinks.length !== 0 && (
        <Rankings round={worldCupState.totalRound} />
      )}
    </>
  );
};

const Title = styled.div`
  padding-top: 36px;
  padding-inline: 24px;
`;

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext<{ drinkId: string; mode: string }>) {
  return {
    props: {
      drinkId: query?.drinkId,
      mode: query?.mode,
    },
  };
}

export default Result;
