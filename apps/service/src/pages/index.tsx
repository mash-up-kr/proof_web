import styled from "@emotion/styled";
import { Button, ButtonHierarchy, theme, Title } from "design-system";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="매력적인 술꾼! 당신의 술 취향을 증명할 수 있도록 초대장이 도착했어요."
          key="proof"
        />
        <meta
          property="og:image"
          content="https://zuzu-resource.s3.ap-northeast-2.amazonaws.com/proof_logo.png"
        />
      </Head>
      <Layout>
        <Button
          width={"312px"}
          onClick={() => router.push("/result")}
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
        <Button
          margin={"0 8px 0 0"}
          hierarchy={ButtonHierarchy.Primary}
          disabled
        >
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
    </>
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
  height: calc(var(--vh, 1vh) * 100);

  background-color: ${theme.colors.background};
`;

const TitleWrapper = styled(Title)`
  margin-top: 40px;
`;

export default Home;
