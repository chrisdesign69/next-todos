"use client";

import React from "react";
import { PuffLoader } from "react-spinners";

const cssOverride = {
  display: "block",
  margin: "0 auto",
  borderColor: "red"
};

const Loader = () => {
  return (
    <PuffLoader
      color="rgba(245, 133, 59, .6)"
      cssOverride={cssOverride}
      size={20}
      loading
      speedMultiplier={1}
    />
  );
};

export default Loader;
