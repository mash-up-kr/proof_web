import styled from "@emotion/styled";
import { Button, ButtonHierarchy, Text, theme } from "design-system";
import React from "react";

interface Props {
  title: string;
  description: string;
}

const ContentCard = ({ title, description }: Props) => {
  return (
    <Card hierarchy={ButtonHierarchy.Tertiary}>
      <Text color={theme.palette.purple100} type="body5">
        {title}
      </Text>
      <Text type="h5">{description}</Text>
    </Card>
  );
};

const Card = styled(Button)`
  display: grid;
  gap: 4px;
  padding: 12px;
  background-color: ${({ theme: { palette } }) => palette.gray500};
`;

export default ContentCard;
