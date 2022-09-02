import styled from "@emotion/styled";
import { GetServerSidePropsContext } from "next";
import { useSetRecoilState } from "recoil";
import { WithWhoType } from "../../@types/api";
import { useGetWorldCupInfosByCategorizingWithWho } from "../../api/query";
import ClickableContentCard from "../../components/ClickableContentCard";
import TitleWithContent from "../../components/TitleWithContent";
import { useNavigate } from "../../hooks";
import { worldCupState } from "../../store";

interface Props {
  withWho: WithWhoType;
}

const Type = ({ withWho }: Props) => {
  const navigate = useNavigate();
  const setWorldCupState = useSetRecoilState(worldCupState);
  const { data: worldcups, isLoading } =
    useGetWorldCupInfosByCategorizingWithWho();

  if (isLoading || worldcups === undefined) {
    return null;
  }
  const worldCupSituations = worldcups[withWho].map((v) => ({
    situation: v.situation,
    worldCupId: v.wolrdcupId,
  }));

  const handleClickClickableContentCard = (idx: number) => {
    setWorldCupState((prev) => ({
      ...prev,
      worldCupId: worldCupSituations[idx].worldCupId,
    }));
    navigate.push("/round");
  };

  return (
    <TitleWithContent
      headerProps={{
        type: "prev",
        onClickIcon: navigate.back,
      }}
      titleProps={{
        title: "이 술을 마시는건\n어떤 상황인가요?",
        desc: "선택에 따라 나올 술이 달라져요.",
      }}
    >
      <Contents>
        {worldCupSituations.map(({ situation }, idx) => {
          return (
            <ClickableContentCard
              key={situation.code + idx}
              title={situation.title}
              content={situation.content}
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
  params,
}: GetServerSidePropsContext<{ with: WithWhoType }>) {
  const withWho = params?.with;

  return {
    props: {
      withWho,
    },
  };
}

export default Type;
