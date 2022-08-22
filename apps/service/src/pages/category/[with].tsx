import styled from "@emotion/styled";
import { GetServerSidePropsContext } from "next";
import ContentCard from "../../components/ContentCard";
import TitleWithContent from "../../components/TitleWithContent";
import { ALONE_CARDS, GROUP_CARDS } from "../../dummy/cards";
import { useNavigate } from "../../hooks";

interface Props {
  cards: {
    id: number;
    title: string;
    desc: string;
  }[];
}

const Type = ({ cards }: Props) => {
  const navigate = useNavigate();

  return (
    <TitleWithContent
      headerProps={{
        type: "prev",
        onClickIcon: navigate.back,
      }}
      titleProps={{
        topQuestion: "이 술을 마시는건",
        bottomQuestion: "어떤 상황인가요?",
        desc: "선택에 따라 나올 술이 달라져요.",
      }}
    >
      <Contents>
        {cards.map(({ id, title, desc }) => {
          return <ContentCard key={id} title={title} description={desc} />;
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
}: GetServerSidePropsContext<{ with: "alone" | "group" }>) {
  const cards = params?.with === "alone" ? ALONE_CARDS : GROUP_CARDS;
  return {
    props: {
      cards,
    },
  };
}

export default Type;
