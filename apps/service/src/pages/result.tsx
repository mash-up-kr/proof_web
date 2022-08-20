import styled from "@emotion/styled";
import { Text } from "design-system";
import * as React from "react";
import { NextPage, NextPageContext } from "next";
import { FloatingButtons, Header, Rankings } from "../components";
import { ROUNDS } from "../dummy/rounds";
import { DRINK_CARDS } from "../dummy/drinkCards";
import WinnerCard from "../components/WinnerCard";

interface Props {
  userAgent: string;
}

// FIXME:: 타입 추론
const Result: NextPage<Props> = ({ userAgent }) => {
  const [isFromNativeApp, setIsFromNativeApp] = React.useState<boolean>(false);
  const [isShared, setIsShared] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   // TODO: setIsFromNativeApp & setIsShared 설정, n초 후 BottomSheet
  // }, []);

  return (
    <>
      <Header type="prev" title="결과" />
      <Title>
        <Text type="h1" textAlign="center">
          {`${isShared ? "친구" : "내"}가 선택한 최고의 술`}
        </Text>
      </Title>
      <WinnerCard drink={DRINK_CARDS[3]} />
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
