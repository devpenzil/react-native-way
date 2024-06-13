import Categories from "@/components/Categories";
import GroupChips from "@/components/GroupChips";
import Navbar from "@/components/Navbar";
import Spotlight from "@/components/Spotlight";
import React from "react";

function Home() {
  return (
    <div>
      <Navbar />
      <Spotlight />
      <GroupChips />
      <Categories />
    </div>
  );
}

export default Home;
