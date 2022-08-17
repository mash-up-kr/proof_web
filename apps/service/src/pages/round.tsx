import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Title } from "design-system";
import * as React from "react";
import { Header } from "../components";
import RoundCard, { Round } from "../components/RoundCard";

const dummyRound = [
  { count: 8, title: "가볍게" },
  { count: 16, title: "무난하게" },
  { count: 32, title: "섬세하게" },
] as Round[];

const RoundPage = () => {
  const [isActives, setIsActives] = React.useState<boolean[]>(
    new Array(dummyRound.length).map(() => false)
  );
  const [rounds, setRounds] = React.useState<Round[]>(dummyRound);

  const handleClickRound = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const $ul = e.target as HTMLUListElement;
    const $li = $ul.closest("li");
    if ($li) {
      const indexToUpdate = Number($li.id);
      const nextIsActive = new Array(dummyRound.length).fill(false);
      nextIsActive[indexToUpdate] = !isActives[indexToUpdate];
      setIsActives(nextIsActive);
    }
  };

  return (
    <Layout>
      <Header type="prev" />
      <TitleWrapper
        topQuestion="몇 강으로"
        bottomQuestion="진행하시겠어요?"
        desc="선택에 따라 나올 술이 달라져요."
      />
      <RoundWrapper onClick={handleClickRound}>
        {rounds.map((round, idx) => (
          <RoundCard
            round={round}
            key={round.count}
            isActive={isActives[idx]}
            id={`${idx}`}
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
  width: 86.7%;
  margin: 0 auto;
  padding: 20px 0 52px 0;
`;

const RoundWrapper = styled.ul`
  width: 86.7%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default RoundPage;
