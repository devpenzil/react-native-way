import React from "react";

function Spotlight() {
  return (
    <div className="container mx-auto py-12 flex justify-center items-center flex-col">
      <div className="text-7xl font-semibold text-center">RN Way</div>
      <div className="text-center w-1/2 mt-3">
        Curated list of npm packages based on use case for <b>react native</b>
      </div>
      <div className="w-1/2 text-center mt-3">
        HyperUI is a collection of free Tailwind CSS components that can be used
        in your next project. With a range of components, you can build your
        next marketing website, admin dashboard, eCommerce store and much more.
      </div>
    </div>
  );
}

export default Spotlight;
