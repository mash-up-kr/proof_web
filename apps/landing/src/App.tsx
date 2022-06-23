import * as React from "react";
import { initAmplitude, useAmplitudeLogEvent } from "hooks";

function App() {
  React.useEffect(() => {
    initAmplitude("31764e47ba1b832e57b9147954f946e4");
  }, []);

  const testAmplitudeHook = useAmplitudeLogEvent("[landing] HW Button Clicked");

  return <button onClick={() => testAmplitudeHook()}>HEELOWORLD</button>;
}

export default App;
