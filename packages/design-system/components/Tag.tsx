import styled from "@emotion/styled";
import theme from "../theme";
import Text from "./Text";

interface TagProps extends React.ComponentProps<"div"> {
  tags: string[];
  shorten?: boolean;
}

function Tag({ tags, shorten, ...restProps }: TagProps) {
  const maxShowingCounts = shorten ? 2 : tags.length;

  return (
    <Wrapper {...restProps}>
      {tags.slice(0, maxShowingCounts).map((tag) => (
        <StyleTag key={tag} type="body6" color={theme.colors.text.general}>
          {tag}
        </StyleTag>
      ))}
      {shorten && tags.length > 2 && <ExtraTag type="body7">+{tags?.length - 2}</ExtraTag>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const StyleTag = styled(Text)`
  background-color: ${theme.palette.gray500};
  padding: 2px 8px;
  border-radius: 4px;
`;

const ExtraTag = styled(Text)`
  align-self: center;
`;

export default Tag;
