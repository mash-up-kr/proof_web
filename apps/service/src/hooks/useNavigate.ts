import { Url } from "url";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { closeWebView } from "../utils/native/action";

const useNavigate = () => {
  const router = useRouter();

  return useMemo(() => {
    return {
      back: () => {
        router.back();
      },
      push: (pathname: string, as?: Url, options?: any) => {
        router.push(pathname, as, options);
      },
      replace: (pathname: string, as?: Url, options?: any) => {
        router.replace(pathname, as, options);
      },
      toNativeHome: () => {
        closeWebView({}, {});
      },
      toPlayStore: () => {
        // TODO: 앱 설치링크 이동
      },
      toMain: () => {
        router.push("/");
      },
    };
  }, [router]);
};

export default useNavigate;
