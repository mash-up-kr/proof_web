import styled from "@emotion/styled";
import { BottomButton, Title } from "design-system";
import Head from "next/head";
import * as React from "react";
import { useSetRecoilState } from "recoil";
import { track } from "@amplitude/analytics-browser";
import { Header } from "../components";
import { useNavigate } from "../hooks";
import { worldCupState } from "../store";
import { getProofAccessToken } from "../utils/native/action";

const Home = () => {
  const navigate = useNavigate();
  const setWorldCupState = useSetRecoilState(worldCupState);

  React.useEffect(() => {
    track("Worldcup Flow Start");
  }, []);

  React.useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        window.localStorage.clear();
      }
      getProofAccessToken().then((token) => {
        setWorldCupState((prev) => ({ ...prev, token }));
      });
    })();
  }, [setWorldCupState]);

  const handleClickNext = () => {
    track("Tap Start");
    navigate.push("/category");
  };

  return (
    <>
      {/* <Head>
        <meta
          property="og:title"
          content="매력적인 술꾼! 당신의 술 취향을 증명할 수 있도록 초대장이 도착했어요."
          key="proof home"
        />
        <meta
          property="og:image"
          content="https://zuzu-resource.s3.ap-northeast-2.amazonaws.com/proof_logo.png"
        />
      </Head> */}

      <Wrapper>
        <Header type="logo" onClickIcon={navigate.toNativeHome} />
        <MainTitle
          title={"술 취향 증명을\n시작해볼까요?"}
          desc="당신의 취향을 증명할 술들을 준비했어요."
          textAlign="center"
        />
        <MainImage
          src="/worldcup_start.png"
          alt="worldcup-main-image"
          width="280px"
          height="324px"
        />
        <BottomButton isActive onClick={handleClickNext}>
          시작하기!
        </BottomButton>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  text-align: center;
`;

const MainTitle = styled(Title)`
  margin-top: 20px;
`;

const MainImage = styled.img`
  margin-top: 38px;
  border-radius: 8px;
`;

export default Home;
