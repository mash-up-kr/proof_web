import styled from "@emotion/styled";
import { Button, ButtonHierarchy, Text } from "design-system";
import Link from "next/link";
import { useRouter } from "next/router";
import TitleWithContent from "../../components/TitleWithContent";
import WithCard from "../../components/WithCard";

const THUMBNAIL_URL =
  "https://user-images.githubusercontent.com/39829378/184810860-51607da1-b60b-41de-8ca2-135e65b223b4.svg";

const ARROW_URL =
  "https://user-images.githubusercontent.com/39829378/184811768-8baa0199-c372-4e5b-90fa-73b9e0dad068.svg";

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
  return (
    <TitleWithContent
      headerProps={{
        type: "prev",
      }}
      titleProps={{
        topQuestion: TITLE.topQuestion,
        bottomQuestion: TITLE.bottomQuestion,
        desc: TITLE.desc,
      }}
    >
      <Column>
        {INFOS.map(({ id, title, desc, href }) => (
          <Row key={id}>
            <WithCard title={title} description={desc} href={href} />
          </Row>
        ))}
      </Column>
    </TitleWithContent>
  );
};

const Column = styled.ul`
  display: grid;
  gap: 24px;
  margin-top: 10vh;
`;
const Row = styled.li``;
export default Category;
