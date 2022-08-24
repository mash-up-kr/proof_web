import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Title } from "design-system";
import * as React from "react";
import { useSetRecoilState } from "recoil";
import { Header } from "../components";
import RoundCard, { Round } from "../components/RoundCard";
import { useNavigate } from "../hooks";
import { worldCupState } from "../store";

const dummyRound = [
  { count: 8, title: "가볍게" },
  { count: 16, title: "무난하게" },
  { count: 32, title: "섬세하게" },
] as Round[];

const RoundPage = () => {
  const [isActives, setIsActives] = React.useState<boolean[]>(
    new Array(dummyRound.length).fill(false)
  );
  const [rounds, setRounds] = React.useState<Round[]>(dummyRound);
  const setWorldCupState = useSetRecoilState(worldCupState);
  const navigate = useNavigate();

  const handleClickRound = (idx: number) => {
    const nextIsActives = new Array(dummyRound.length).fill(false);
    nextIsActives[idx] = !isActives[idx];
    setIsActives(nextIsActives);
    setWorldCupState((prev) => ({
      ...prev,
      totalRound: rounds[idx].count,
      currentRound: rounds[idx].count,
    }));
    navigate.push("/worldcup");
  };

  const handleClickHeaderPrevIcon = () => {
    setWorldCupState((prev) => ({
      ...prev,
      totalRound: 0,
      currentRound: 0,
    }));
    navigate.back();
  };

  return (
    <Layout>
      <Header type="prev" onClickIcon={handleClickHeaderPrevIcon} />
      <TitleWrapper
        title={"몇 강으로\n진행하시겠어요?"}
        desc="선택에 따라 나올 술이 달라져요."
      />
      <RoundWrapper>
        {rounds.map((round, idx) => (
          <RoundCard
            round={round}
            key={round.count}
            isActive={isActives[idx]}
            onClick={() => handleClickRound(idx)}
          />
        ))}
      </RoundWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

    background-color: ${theme.colors.background};
  `}
`;

const TitleWrapper = styled(Title)`
  margin: 0 auto;
  padding: 20px 0 52px 24px;
`;

const RoundWrapper = styled.ul`
  margin-inline: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default RoundPage;
