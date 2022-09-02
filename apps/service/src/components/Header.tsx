import styled from "@emotion/styled";
import { Icon, Text, theme } from "design-system";
import { useUserAgent } from "../hooks";

type HeaderType = "prev" | "close" | "logo";

// onClickIcon은 prev 면 prev '<' 아이콘, close, logo면 'X' 아이콘을 눌렀을 때 적용
interface HeaderProps {
  type: HeaderType;
  title?: string;
  onClickIcon?: () => void;
}

function Header({ type, title, onClickIcon }: HeaderProps) {
  const { userAgent } = useUserAgent();

  return (
    <Wrapper>
      {type === "prev" && (
        <PrevIcon name="directionLeft" onClick={onClickIcon} />
      )}
      {type === "logo" ? (
        <LogoIcon name="logo" />
      ) : (
        <TitleWrapper type="body3" textAlign="center">
          {title}
        </TitleWrapper>
      )}
      {(type === "close" || type === "logo") && userAgent?.isAndroidWebView && (
        <CloseIcon name="close" onClick={onClickIcon} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 52px;
  left: 0;
  top: 0;
  z-index: ${theme.zIndex.header};
`;

const PrevIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
`;

const CloseIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
`;

const LogoIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleWrapper = styled(Text)`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Header;
