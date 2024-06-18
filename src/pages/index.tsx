import Categories from "@/components/Categories";
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
        <Categories />
      </div>
    </>
  );
}

export default Home;
