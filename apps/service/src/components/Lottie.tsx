import styled from "@emotion/styled";
import React from "react";
import Lottie from "react-lottie";
import lottie from "../../public/lotties/lottie.json";

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const buttonStyle = {
      display: "block",
      margin: "10px auto",
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: lottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <Wrapper>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          // isStopped={this.state.isStopped}
          // isPaused={this.state.isPaused}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
