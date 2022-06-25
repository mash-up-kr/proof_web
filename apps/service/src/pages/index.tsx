const Home = ({ id }: { id: string }) => {
  return <h1>ID: {id}</h1>;
};

export async function getServerSideProps() {
  return {
    props: {
      id: "123",
    },
  };
}

export default Home;
