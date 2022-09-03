import styled from "@emotion/styled";
import { BottomButton, Title } from "design-system";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { useSetRecoilState } from "recoil";
import { Header } from "../components";
import { useNavigate } from "../hooks";
import { worldCupState } from "../store";
import { getProofAccessToken } from "../utils/native/action";

const HomeWithWorldCupId = () => {
  const router = useRouter();
  const worldCupId = router.query.worldCupId;
  const navigate = useNavigate();
  const setWorldCupState = useSetRecoilState(worldCupState);

  React.useEffect(() => {
    if (typeof worldCupId !== "undefined") {
      setWorldCupState((prev) => ({
        ...prev,
        worldCupId: Number(worldCupId),
      }));
    }
    if (typeof window !== "undefined") {
      window.localStorage.clear();
    }
    getProofAccessToken().then((token) => {
      setWorldCupState((prev) => ({ ...prev, token }));
    });
  }, [setWorldCupState, worldCupId]);

  return (
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
      <BottomButton isActive onClick={() => navigate.push("/round")}>
        시작하기!
      </BottomButton>
    </Wrapper>
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

export default HomeWithWorldCupId;
