import styled from "@emotion/styled";
import { Button, ButtonHierarchy, theme, Title } from "design-system";
import * as React from "react";

const Home = () => {
  return (
    <Layout>
      <Button
        width={"312px"}
        onClick={() => console.log("click")}
        hierarchy={ButtonHierarchy.Primary}
      >
        Primary
      </Button>
      <Button
        onClick={() => console.log("click")}
        hierarchy={ButtonHierarchy.Primary}
        fullWidth
      >
        Primary Full
      </Button>
      <Button margin={"0 8px 0 0"} hierarchy={ButtonHierarchy.Primary} disabled>
        Primary Disabled
      </Button>
      <Button
        width={312}
        onClick={() => console.log("click")}
        hierarchy={ButtonHierarchy.Secondary}
      >
        Secondary
      </Button>
      <Button
        onClick={() => console.log("click")}
        hierarchy={ButtonHierarchy.Secondary}
        fullWidth
      >
        Secondary Full
      </Button>
      <Button hierarchy={ButtonHierarchy.Secondary} disabled>
        Secondary Disabled
      </Button>
      <TitleWrapper
        topQuestion="누구와 함께"
        bottomQuestion="술을 마시나요?"
        desc="선택에 따라 나올 술이 달라져요."
      />
      <TitleWrapper
        topQuestion="술 취향 증명을"
        bottomQuestion="시작해볼까요?"
        desc="당신의 취향을 증명할 술들을 준비했어요."
        textAlign="center"
      />
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      id: "123",
    },
  };
}

const Layout = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${theme.colors.background};
`;

const TitleWrapper = styled(Title)`
  margin-top: 40px;
`;

export default Home;
