import styled from "@emotion/styled";
import { Button, ButtonHierarchy, Text, theme } from "design-system";
import React from "react";
import { useNavigate } from "../hooks";

const THUMBNAIL_URL =
  "https://user-images.githubusercontent.com/39829378/184810860-51607da1-b60b-41de-8ca2-135e65b223b4.svg";

const ARROW_URL =
  "https://user-images.githubusercontent.com/39829378/184811768-8baa0199-c372-4e5b-90fa-73b9e0dad068.svg";

interface Props {
  href: string;
  title: string;
  description: string;
  size?: "small" | "medium";
}

const WithCard = ({ href, title, description, size = "medium" }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      hierarchy={ButtonHierarchy.Tertiary}
      fullWidth
      size={size}
      onClick={() => {
        navigate.push(href);
      }}
    >
      <Box>
        <CircleThumbnail src={THUMBNAIL_URL} alt="이미지" />
        <Contents>
          <Text type="body3" color={theme.palette.gray200}>
            {title}
          </Text>
          <Text type="h3">{description}</Text>
        </Contents>
      </Box>
      <ArrowIcon src={ARROW_URL} alt="화살표" />
    </Card>
  );
};
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled(Button)<Pick<Props, "size">>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.lg};
  height: ${({ size }) => (size === "medium" ? "104px" : "84px")};
  background-color: ${({ theme: { palette } }) => palette.gray500};
`;
const Contents = styled.div`
  display: grid;
  gap: 4px;
`;
const CircleThumbnail = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 12px;
  border-radius: 50%;
`;
const ArrowIcon = styled.img``;

export default WithCard;
