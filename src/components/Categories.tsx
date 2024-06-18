import { supaBase } from "@/config/supabase";
import { categoriesType } from "@/types/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState<categoriesType>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let { data } = await supaBase.from("category").select("*").range(0, 14);
      setCategories(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-2/3 mx-auto flex flex-row flex-wrap">
      {isLoading && (
        <div>
          {/* <Lottie animationData={loader} /> */}
          Loading...
        </div>
      )}
      {categories?.map((obj) => {
        return (
          <div className="w-1/3 p-3" key={obj.id}>
            <Link href={`/categories/${obj.category_slug}`}>
              <div className="border p-4">
                <div>{obj?.category_emoji}</div>
                <div className="text-xl font-semibold">{obj?.display_name}</div>
                <div className="text-gray-600 text-xs mt-3">
                  {obj?.packages?.length || 0} package(s)
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
