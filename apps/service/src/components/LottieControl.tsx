import styled from "@emotion/styled";
import React from "react";
import Lottie from "react-lottie";
import * as lottieFile from "./lottie.json";

function LottieControl() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Wrapper>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default LottieControl;
