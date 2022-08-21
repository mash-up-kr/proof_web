import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import TitleWithContent from "../../components/TitleWithContent";
import WithCard from "../../components/WithCard";
import { useNavigate } from "../../hooks";
import { worldCupState } from "../../store";

const INFOS = [
  {
    id: 1,
    title: "혼자서 먹어요",
    desc: "진리지는 혼술이에요",
    href: "/category/alone",
  },
  {
    id: 2,
    title: "옹기종기 모여",
    desc: "여럿이서 먹어요",
    href: "/category/group",
  },
];

const TITLE = {
  topQuestion: "누구와 함께",
  bottomQuestion: "술을 마시나요?",
  desc: "선택에 따라 나올 술이 달라져요.",
};

const Category = () => {
  const navigate = useNavigate();
  const setWorldCupState = useSetRecoilState(worldCupState);

  const handleClickWithCard = (idx: number) => {
    const withWho = INFOS[idx].href.slice(10);
    setWorldCupState((prev) => ({
      ...prev,
      with: withWho as "alone" | "group",
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
        topQuestion: TITLE.topQuestion,
        bottomQuestion: TITLE.bottomQuestion,
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
