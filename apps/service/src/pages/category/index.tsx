import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
// import { track } from "@amplitude/analytics-browser";
import { WithWhoType } from "../../@types/api";
import TitleWithContent from "../../components/TitleWithContent";
import WithCard from "../../components/WithCard";
import { useNavigate } from "../../hooks";
import { worldCupState } from "../../store";

const INFOS = [
  {
    id: 1,
    title: "혼술은 진리지",
    desc: "혼자서 먹어요",
    href: "/category/SOLO",
  },
  {
    id: 2,
    title: "옹기종기 모여",
    desc: "여럿이서 먹어요",
    href: "/category/DUO",
  },
];

const TITLE = {
  title: "누구와 함께\n술을 마시나요?",
  desc: "선택에 따라 나올 술이 달라져요.",
};

const Category = () => {
  const navigate = useNavigate();
  const setWorldCupState = useSetRecoilState(worldCupState);

  const handleClickWithCard = (idx: number) => {
    const withWho = INFOS[idx].href.slice(10);
    // track("Select Member", { withWho });
    setWorldCupState((prev) => ({
      ...prev,
      with: withWho as WithWhoType,
    }));
    navigate.push(INFOS[idx].href);
  };

  return (
    <TitleWithContent
      headerProps={{
        type: "prev",
        onClickIcon: navigate.back,
      }}
      titleProps={{
        title: TITLE.title,
        desc: TITLE.desc,
      }}
    >
      <Column>
        {INFOS.map(({ id, title, desc }, idx) => (
          <Row key={id}>
            <WithCard
              title={title}
              description={desc}
              onClick={() => handleClickWithCard(idx)}
            />
          </Row>
        ))}
      </Column>
    </TitleWithContent>
  );
};

const Column = styled.ul`
  display: grid;
  gap: 24px;
`;
const Row = styled.li``;

export default Category;
