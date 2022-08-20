import { useRouter } from "next/router";
import { useMemo } from "react";

const useNavigate = () => {
  const router = useRouter();

  return useMemo(() => {
    return {
      back: () => {
        router.back();
      },
      to: (pathname: string) => {
        router.push({
          pathname,
        });
      },
      toNativeHome: () => {
        // TODO: 네이티브 home으로 이동
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
