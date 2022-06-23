import { useAmplitudeLogEvent } from "hooks";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const testAmplitudeHook = useAmplitudeLogEvent("[service] HN Button Clicked");

  return <button onClick={() => testAmplitudeHook()}>HEELOW NEXT</button>;
};

export default Home;
