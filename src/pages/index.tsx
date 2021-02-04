import Head from "next/head";
import { ToolBar } from "../components/molecules/ToolBar";
import { Wall } from "../components/organisms/Wall";

const Home: React.FC = () => {
  return (
    <>
      <Wall />
      <ToolBar />
    </>
  );
};

export default Home;
