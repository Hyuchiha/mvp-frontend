"use client"

import { selectGlobalProgress } from "@/lib/redux/selectors/global.selector";
import { useSelector } from "react-redux";

function GlobalLoader() {
  const showProgress = useSelector(selectGlobalProgress);

  return showProgress ? (
    <div className="flex flex-row justify-center items-center bg-black/40 absolute top-0 w-full h-full z-50">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-secondary border-t-transparent"
      />
    </div>
  ) : null;
}

export default GlobalLoader;