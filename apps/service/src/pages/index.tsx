import { Button, ButtonHierarchy } from "design-system";
import * as React from "react";

const Home = () => {
  return (
    <div>
      <Button
        width={"312px"}
        onClick={() => console.log("click")}
        hierarchy={ButtonHierarchy.Primary}
      >
        Primary
      </Button>
      <Button
        onClick={() => console.log("click")}
        hierarchy={ButtonHierarchy.Primary}
        full
      >
        Primary Full
      </Button>
      <Button margin={"0 8px 0 0"} hierarchy={ButtonHierarchy.Primary} disabled>
        Primary Disabled
      </Button>
      <Button
        width={312}
        onClick={() => console.log("click")}
        hierarchy={ButtonHierarchy.Secondary}
      >
        Secondary
      </Button>
      <Button
        onClick={() => console.log("click")}
        hierarchy={ButtonHierarchy.Secondary}
        full
      >
        Secondary Full
      </Button>
      <Button hierarchy={ButtonHierarchy.Secondary} disabled>
        Secondary Disabled
      </Button>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      id: "123",
    },
  };
}

export default Home;
