import styled from "@emotion/styled";
import { Title } from "design-system";
import React, { ComponentProps, PropsWithChildren } from "react";
import Header from "./Header";

interface Props {
  headerProps: ComponentProps<typeof Header>;
  titleProps: ComponentProps<typeof Title>;
}

const TitleWithContent = ({
  headerProps,
  titleProps,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Wrapper>
      <Header {...headerProps} />
      <Section>
        <Title
          {...titleProps}
          style={{
            marginTop: "20px",
            marginBottom: "80px",
          }}
        />
        {children}
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.main``;
const Section = styled.section`
  margin-inline: 24px;
`;

export default TitleWithContent;
