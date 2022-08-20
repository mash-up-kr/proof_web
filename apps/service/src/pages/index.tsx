import styled from "@emotion/styled";
import { BottomButton, Title } from "design-system";
import { NextPage } from "next";
import * as React from "react";
import { Header } from "../components";
import { useNavigate } from "../hooks";

const Home: NextPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header type="logo" onClickIcon={navigate.toNativeHome} />
      <MainTitle
        topQuestion="술 취향 증명을"
        bottomQuestion="시작해볼까요?"
        desc="당신의 취향을 증명할 술들을 준비했어요."
        textAlign="center"
      />
      <MainImage
        src="/worldcup_start.png"
        alt="worldcup-main-image"
        width="280px"
        height="324px"
      />
      <BottomButton isActive onClick={() => navigate.to("/category")}>
        시작하기!
      </BottomButton>
    </Wrapper>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      id: "123",
    },
  };
}

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
