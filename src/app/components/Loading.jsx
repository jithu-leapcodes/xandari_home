import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#022436] via-[#032B45] to-[#05365A] flex items-center justify-center">
      <div className="h-40 w-40 animatepopup">
        <img
          src="/images/logo_1.png"
          alt="Loading"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Loading;
