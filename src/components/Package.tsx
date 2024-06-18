import React from "react";

function Package() {
  return (
    <div className="border border-slate-500 p-4 mt-4">
      <div className="flex flex-row justify-between">
        <div className="text-3xl font-semibold mb-6 w-2/5">React</div>
      </div>
      <div className="flex flex-row">
        <div className="w-3/5">
          <div>Version 0.0.3</div>
          <div>The fastest async handler in node.js</div>
          <div>Publisher: adamhalasz</div>
          <div className="mt-8 gap-10 flex">
            <div
              className="radial-progress text-purple-500 text-xs"
              style={{ "--value": 70, "--size": "7rem" }}
              role="progressbar"
            >
              Quality
            </div>
            <div
              className="radial-progress text-blue-600 text-xs"
              style={{ "--value": 70, "--size": "7rem" }}
              role="progressbar"
            >
              Popularity
            </div>
            <div
              className="radial-progress text-amber-900 text-xs"
              style={{ "--value": 70, "--size": "7rem" }}
              role="progressbar"
            >
              Maintenance
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col gap-4">
          <div className="border border-black p-2 text-center font-semibold text-base">
            📖 NPM Directory{" "}
          </div>
          <div className="border border-black p-2 text-center font-semibold text-base">
            📦 Repository{" "}
          </div>
          <div className="border border-black p-2 text-center font-semibold text-base">
            🏠 Home Page{" "}
          </div>
          <div className="border border-black p-2 text-center font-semibold text-base">
            🪲 Bug List{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
