import styled from '@emotion/styled';
import Text from 'design-system/components/Text';
import { colors } from 'design-system/theme';

function TestText() {
  return (
    <>
      <Text type='h1' color={colors.primary.dark}>
        Color Dark H1
      </Text>
      <Text type='h1' color={colors.text.highlight}>
        Color Highlight H1
      </Text>
      <Text type='h1' textAlign='right' color={colors.primary.disabled}>
        H1
      </Text>
      <Text type='h2' textAlign='center'>
        H2
      </Text>
      <Text type='h3' color={colors.primary.default}>
        H3
      </Text>
      <Text type='h4' display='block'>
        H4
      </Text>
      <Text type='h5'>H5</Text>
      <Text type='body1'>Body1</Text>
      <Text type='body2'>Body2</Text>
      <Text type='body3'>Body3</Text>
      <Text type='body4'>Body4</Text>
      <Text type='body5'>Body5</Text>
      <Text type='body6'>Body6</Text>
      <Text type='body7'>Body7</Text>
      <Text type='button1'>Button1</Text>
      <Text type='button2'>Button2</Text>
      <Text type='button3' display='flex'>
        Button3
      </Text>
    </>
  );
}

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.text.highlight};
`;

export { TestText };
