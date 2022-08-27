import styled from "@emotion/styled";
import { Text } from "design-system";
import * as React from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import {
  Header,
  InstallAppBottomSheet,
  Rankings,
  ShareButtons,
} from "../../components";
import { ROUNDS } from "../../dummy/rounds";
import { DRINK_CARDS } from "../../dummy/drinkCards";
import WinnerCard from "../../components/WinnerCard";
import share from "../../utils/share";
import { useNavigate, useUserAgent, useWorldCup } from "../../hooks";
import DrinkInfoBottomSheet from "../../components/DrinkInfoBottomSheet";
import { DrinkWithRound } from "../../components/DrinkCard";

const BASE_URL = `https://zuzu-web.vercel.app`;

interface Props {
  drinkId: string;
  shared: string;
}

const Result = ({ drinkId, shared }: Props) => {
  const router = useRouter();
  const [isInstallAppBottomSheetOpened, setIsInstallAppBottomSheetOpened] =
    React.useState<boolean>(false);
  const [winnerDrink, setWinnerDrink] = React.useState<DrinkWithRound>(
    DRINK_CARDS[2] as DrinkWithRound
  );
  const navigate = useNavigate();
  const { getWinnerDrink, revertToPrevRoundState, getTop8DrinkIds } =
    useWorldCup();
  const [isDrinkDetailBottomSheetOpened, setIsDrinkDetailBottomSheetOpened] =
    React.useState(false);
  const [webView, setWebView] = React.useState(false);

  const { parseUserAgent } = useUserAgent();

  React.useEffect(() => {
    // TODO: result는 새로고침이 될 수 있으므로 param으로 Drink id를 가져와야 할 듯
    const winnerDrink = getWinnerDrink();
    if (winnerDrink) {
      setWinnerDrink(winnerDrink);
    }
    let timer = setTimeout(() => setIsInstallAppBottomSheetOpened(true), 1000);
    if (typeof window !== "undefined") {
      const uaString = navigator.userAgent;
      const { isAndroidWebView } = parseUserAgent(uaString);
      setWebView(isAndroidWebView);
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // TODO: native임에 따라서 연동필요
  const handleClickHeaderPrevIcon = () => {
    revertToPrevRoundState();
    navigate.back();
  };

  const dataToShare = {
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
      {!webView && isInstallAppBottomSheetOpened && (
        <InstallAppBottomSheet
          onClose={() => setIsInstallAppBottomSheetOpened(false)}
        />
      )}
      {isDrinkDetailBottomSheetOpened && (
        <DrinkInfoBottomSheet
          drinkCardIcon={"typeA"}
          drinkName={DRINK_CARDS[1].name}
          drinkInformation={DRINK_CARDS[1].info}
          drinkMetaData={{
            abv: DRINK_CARDS[1].abv,
            categoryName: DRINK_CARDS[1].category,
            origin: DRINK_CARDS[1].origin,
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
      <ShareButtons
        handleClickRightButton={handleShare}
        shared={Boolean(shared)}
      />
      {!shared && <Rankings rounds={ROUNDS} drinks={DRINK_CARDS} />}
    </>
  );
};

const Title = styled.div`
  padding-top: 36px;
  padding-inline: 24px;
`;

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext<{ drinkId: string; shared: string }>) {
  return {
    props: {
      drinkId: query?.drinkId,
      shared: query?.shared ?? "",
    },
  };
}

export default Result;
