import Head from "next/head";

import Home from "../components/pages/home/home.component";

const HomePage = () => {
  return <>
    <Head>
      <title>Home</title>
    </Head>
    <Home />
  </>
};
export default HomePage;
