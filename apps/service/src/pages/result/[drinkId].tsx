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
import { useUserAgent } from "../../hooks";
import DrinkInfoBottomSheet from "../../components/DrinkInfoBottomSheet";

const BASE_URL = `https://zuzu-web.vercel.app`;

interface Props {
  drinkId: string;
}

const Result = ({ drinkId }: Props) => {
  const router = useRouter();
  const [isShared, setIsShared] = React.useState<boolean>(false);
  const [isInstallAppBottomSheetOpened, setIsInstallAppBottomSheetOpened] =
    React.useState<boolean>(false);
  const [isDrinkDetailBottomSheetOpened, setIsDrinkDetailBottomSheetOpened] =
    React.useState(false);
  const { webView } = useUserAgent();

  React.useEffect(() => {
    let timer = setTimeout(() => setIsInstallAppBottomSheetOpened(true), 1000);
    // TODO: drink data fetch, ?shared=true 분기 나누기, 월드컵 결과 가져오기

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const dataToShare = {
    title: "Proof",
    text: "분위기에 취하고 맛에 취하는 우리, 프루프에서 술드컵을 진행해보세요. 자세한 내용은 다음 초대 링크에서 확인하세요.",
    url: `${BASE_URL}${router.pathname}`,
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
            categoryName: DRINK_CARDS[1].category.name,
            origin: DRINK_CARDS[1].origin,
          }}
          onClose={() => setIsDrinkDetailBottomSheetOpened(false)}
        />
      )}
      <Header type="prev" title="결과" />
      <Title>
        <Text type="h1" textAlign="center">
          {`${isShared ? "친구" : "내"}가 선택한 최고의 술`}
        </Text>
      </Title>
      <WinnerCard
        drink={DRINK_CARDS[3]}
        handleClickSearchIcon={() => setIsDrinkDetailBottomSheetOpened(true)}
      />
      <ShareButtons handleClickRightButton={handleShare} />
      <Rankings rounds={ROUNDS} drinks={DRINK_CARDS} />
    </>
  );
};

const Title = styled.div`
  padding-top: 36px;
  padding-inline: 24px;
`;

export async function getServerSideProps({
  req,
  params,
}: GetServerSidePropsContext<{ drinkId: string }>) {
  return {
    props: {
      drinkId: params?.drinkId,
    },
  };
}

export default Result;
