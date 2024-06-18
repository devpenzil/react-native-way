/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "@/components/Navbar";
import Package from "@/components/Package";
import Spotlight from "@/components/Spotlight";
import { supaBase } from "@/config/supabase";
import { categories } from "@/db/category";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Category() {
  const router = useRouter();
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(router.query);

  useEffect(() => {
    fetchPackages();
  }, [router.query]);

  const fetchPackages = async () => {
    try {
      let { data } = await supaBase
        .from("category")
        .select("packages")
        .like("category_slug", router.query.category);

      console.log("hssghj", data[0]?.packages);
      setPackages(data[0]?.packages);

      const raw = JSON.stringify(["cross-spawn", "react"]);

      const requestOptions = {
        method: "POST",
        body: raw,
        redirect: "follow",
      };

      fetch("https://api.npms.io/v2/package/mget", {
        method: "POST",
        body: {
          names: raw,
        },
        redirect: "follow",
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>React Native Way | Category | {router.query.category} </title>
      </Head>
      <div>
        <Navbar />
        <Spotlight />

        <div className="w-2/3 m-auto">
          <div className="text-4xl font-semibold mb-6">
            {router.query.category}
          </div>
          {packages?.map((obj) => (
            <Package />
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
