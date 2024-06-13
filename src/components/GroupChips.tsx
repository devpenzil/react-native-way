import React from "react";

function GroupChips() {
  return (
    <div className="container mx-auto my-6 flex gap-4 overflow-x-scroll py-4">
      {["UI", "Navigation", "Authentication"].map((obj) => {
        return (
          <div
            key={obj}
            className="bg-red-400 px-6 rounded-full cursor-pointer"
          >
            {obj}
          </div>
        );
      })}
    </div>
  );
}

export default GroupChips;
