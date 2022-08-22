import styled from "@emotion/styled";
import { Text } from "design-system";
import * as React from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { FloatingButtons, Header, Rankings } from "../components";
import { ROUNDS } from "../dummy/rounds";
import { DRINK_CARDS } from "../dummy/drinkCards";
import WinnerCard from "../components/WinnerCard";
import share from "../utils/share";

const BASE_URL = `https://zuzu-web.vercel.app`;

interface Props {
  userAgent: string;
}

// FIXME:: 타입 추론
const Result: NextPage<Props> = ({ userAgent }) => {
  const router = useRouter();
  const [isFromNativeApp, setIsFromNativeApp] = React.useState<boolean>(false);
  const [isShared, setIsShared] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   // TODO: setIsFromNativeApp & setIsShared 설정, n초 후 BottomSheet
  // }, []);

  const shareData = {
    title: "Proof",
    text: "분위기에 취하고 맛에 취하는 우리, 프루프에서 술드컵을 진행해보세요. 자세한 내용은 다음 초대 링크에서 확인하세요.",
    url: `${BASE_URL}${router.pathname}`,
  };

  return (
    <>
      <Header type="prev" title="결과" />
      <Title>
        <Text type="h1" textAlign="center">
          {`${isShared ? "친구" : "내"}가 선택한 최고의 술`}
        </Text>
      </Title>
      <WinnerCard drink={DRINK_CARDS[3]} />
      <FloatingButtons
        handleClickRightButton={async () => {
          const result = await share(shareData);
          if (result === "copiedToClipboard") {
            alert("링크를 클립보드에 복사했습니다.");
          } else if (result === "failed") {
            alert("공유하기가 지원되지 않는 환경입니다.");
          }
        }}
      />
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
