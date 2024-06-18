import Categories from "@/components/Categories";
import Filter from "@/components/Filter";
import Navbar from "@/components/Navbar";
import Spotlight from "@/components/Spotlight";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>React Native Way | Home</title>
      </Head>
      <div>
        <Navbar />
        <Spotlight />
        <Filter />
        <Categories />
      </div>
    </>
  );
}

export default Home;
