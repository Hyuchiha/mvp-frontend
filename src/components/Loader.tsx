"use client"

import { useSelector } from "react-redux";

function Loader() {
  return  (
    <div className="flex flex-row justify-center items-center bg-black/40 absolute left-0 top-0 w-full h-full z-50">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-green-500 border-t-transparent"
      />
    </div>
  );
}

export default Loader;