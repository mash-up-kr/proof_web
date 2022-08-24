import styled from "@emotion/styled";
import { GetServerSidePropsContext } from "next";
import { useSetRecoilState } from "recoil";
import ClickableContentCard from "../../components/ClickableContentCard";
import TitleWithContent from "../../components/TitleWithContent";
import { ALONE_CARDS, GROUP_CARDS } from "../../dummy/cards";
import { useNavigate } from "../../hooks";
import { WithWhoType, worldCupState } from "../../store";

interface Props {
  cards: {
    id: number;
    title: string;
    desc: string;
  }[];
}

const Type = ({ cards }: Props) => {
  const navigate = useNavigate();
  const setWorldCupState = useSetRecoilState(worldCupState);

  const handleClickClickableContentCard = (idx: number) => {
    setWorldCupState((prev) => ({ ...prev, situation: cards[idx].title }));
    navigate.push("/round");
  };

  return (
    <TitleWithContent
      headerProps={{
        type: "prev",
        onClickIcon: navigate.back,
      }}
      titleProps={{
        title: "이 술을 마시는건\n 어떤 상황인가요?",
        desc: "선택에 따라 나올 술이 달라져요.",
      }}
    >
      <Contents>
        {cards.map(({ id, title, desc }, idx) => {
          return (
            <ClickableContentCard
              key={id}
              title={title}
              description={desc}
              onClick={() => handleClickClickableContentCard(idx)}
            />
          );
        })}
      </Contents>
    </TitleWithContent>
  );
};

const Contents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export async function getServerSideProps({
  req,
  params,
}: GetServerSidePropsContext<{ with: WithWhoType }>) {
  const cards = params?.with === "SOLO" ? ALONE_CARDS : GROUP_CARDS;
  return {
    props: {
      cards,
    },
  };
}

export default Type;
