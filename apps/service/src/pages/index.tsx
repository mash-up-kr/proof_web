import { Button } from "./Button";

const componnents = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
];

const Home = ({ id }: { id: string }) => {
  return (
    <>
      <h1>ID: {id}</h1>
      {componnents.map((component) => (
        <div key={id}></div>
      ))}
      <Button></Button>
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
