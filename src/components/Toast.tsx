"use client";

import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      containerClassName="overflow-auto"
    />
  )
}

export default Toast;