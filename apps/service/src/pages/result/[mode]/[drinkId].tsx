import styled from "@emotion/styled";
import { Text } from "design-system";
import * as React from "react";
import { GetServerSidePropsContext } from "next";
import { useRecoilState } from "recoil";
import {
  Header,
  InstallAppBottomSheet,
  Rankings,
  ShareButtons,
} from "../../../components";
import WinnerCard from "../../../components/WinnerCard";
import share from "../../../utils/share";
import { useNavigate, useUserAgent, useWorldCup } from "../../../hooks";
import DrinkInfoBottomSheet from "../../../components/DrinkInfoBottomSheet";
import { worldCupState as state } from "../../../store";
import {
  useGetDrinkEvaluationById,
  useGetDrinkInfoById,
} from "../../../api/query";
import { DrinkEvaluationDto } from "../../../@types/api/drinkEvaluation";

const BASE_URL = `https://zuzu-web.vercel.app`;

interface Props {
  drinkId: string;
  mode: "view" | "shared";
}

const Result = ({ drinkId, mode }: Props) => {
  const navigate = useNavigate();
  const { userAgent } = useUserAgent();
  const { revertToPrevRoundState } = useWorldCup();
  const result = useGetDrinkInfoById(Number(drinkId));

  const [worldCupState] = useRecoilState(state);

  const shared = mode === "shared";
  const webView = userAgent?.isAndroidWebView;
  const drink = result.data;

  const [isInstallAppBottomSheetOpened, setIsInstallAppBottomSheetOpened] =
    React.useState<boolean>(false);
  const [isDrinkDetailBottomSheetOpened, setIsDrinkDetailBottomSheetOpened] =
    React.useState(false);

  const { data: winnerDrinkEvaluation } = useGetDrinkEvaluationById(
    drink?.id ?? 1
  );

  React.useEffect(() => {
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
    url: `${BASE_URL}/result/shared/${drinkId}`,
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
          drinkCardIcon="winner"
          evaluation={winnerDrinkEvaluation as DrinkEvaluationDto}
          selectedDrink={drink}
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
        tags={winnerDrinkEvaluation?.result?.situation as string[]}
        drink={drink}
        handleClickSearchIcon={() => setIsDrinkDetailBottomSheetOpened(true)}
        select={drink?.worldcupWinCount ?? 1}
      />
      <ShareButtons
        handleClickLeftButton={() => {
          if (webView) {
            navigate.toNativeHome();
          } else {
            navigate.push("/");
          }
        }}
        handleClickRightButton={handleShare}
        shared={shared}
        webView={webView}
      />
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
