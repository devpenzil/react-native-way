import React from "react";

function Filter() {
  return (
    <div className="w-2/3 mx-auto pb-8">
      <label className="input input-bordered flex items-center gap-2 m-3">
        <input
          type="text"
          className="grow"
          placeholder="Search Package, use case, categories etc"
        />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      <div className="m-3 flex gap-3 pb-4 overflow-x-auto">
        {[
          "UI",
          "Animation",
          "AI/ML",
          "Navigation",
          "UI",
          "Animation",
          "AI/ML",
          "Navigation",
          "UI",
          "Animation",
          "AI/ML",
          "Navigation",
          "UI",
          "Animation",
          "AI/ML",
          "Navigation",
        ].map((obj) => {
          return (
            <div className="badge badge-lg text-xs" key={obj}>
              {obj}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
