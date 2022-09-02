import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Title } from "design-system";
import * as React from "react";
import { useRecoilState } from "recoil";
import { track } from "@amplitude/analytics-browser";
import { useGetOneWorldCupInfoById } from "../api/query";
import { WorldCupService } from "../api/service";
import { Header } from "../components";
import RoundCard from "../components/RoundCard";
import { useNavigate } from "../hooks";
import { worldCupState as recoilWorldCupState } from "../store";
import { getDrinksWithRounds } from "../utils";

const RoundPage = () => {
  const [isActives, setIsActives] = React.useState<boolean[]>(
    new Array(3).fill(false)
  );
  const [worldCupState, setWorldCupState] = useRecoilState(recoilWorldCupState);
  const navigate = useNavigate();
  const { data: worldCupInfo, isLoading } = useGetOneWorldCupInfoById(
    worldCupState.worldCupId
  );

  if (isLoading || worldCupInfo === undefined) {
    return null;
  }
  const rounds = worldCupInfo.round;

  const handleClickRound = async (idx: number) => {
    const nextIsActives = new Array(rounds.length).fill(false);
    nextIsActives[idx] = !isActives[idx];
    setIsActives(nextIsActives);

    const round = rounds[idx].count;
    const drinks = await WorldCupService.getDrinksByRound({
      worldCupId: worldCupState.worldCupId,
      round,
    });
    setWorldCupState((prev) => ({
      ...prev,
      title: worldCupInfo.title,
      totalRound: round,
      currentRound: round,
      drinks: getDrinksWithRounds(drinks, round),
    }));
    track("Select Round", { round });
    navigate.push("/worldcup");
  };

  const handleClickHeaderPrevIcon = () => {
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
