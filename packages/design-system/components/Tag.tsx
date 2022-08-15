import styled from "@emotion/styled";
import theme from "../theme";
import Text from "./Text";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[] | string;
}

function Tag({ tags, ...restProps }: TagProps) {
  return (
    <Wrapper {...restProps}>
      {Array.isArray(tags) ? (
        tags.map((tag) => (
          <StyleTag key={tag} type="body6" color={theme.colors.text.general}>
            {tag}
          </StyleTag>
        ))
      ) : (
        <StyleTag type="body6" color={theme.colors.text.general}>
          {tags}
        </StyleTag>
      )}
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

export default Tag;