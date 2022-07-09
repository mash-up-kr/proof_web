import {Button, ButtonHierarchy} from "design-system";

const Home = ({ id }: { id: string }) => {
  return (
    <>
      <h1>ID: {id}</h1>
      <Button onClick={() => console.log('click')} hierarchy={ButtonHierarchy.Primary}>Primary</Button>
      <Button onClick={() => console.log('click')} hierarchy={ButtonHierarchy.Primary} full>Primary Full</Button>
      <Button margin={"0 8px 0 0"} hierarchy={ButtonHierarchy.Primary} disabled>Primary Disabled</Button>
      <Button onClick={() => console.log('click')} hierarchy={ButtonHierarchy.Secondary}>Secondary</Button>
      <Button hierarchy={ButtonHierarchy.Secondary} disabled>Secondary Disabled</Button>
    </>
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
