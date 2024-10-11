import React from "react";

export const samplePagesConfigs = [
  {
    path: "/sample/sample2",
    component: React.lazy(() => import("./sample-1/container")),
  },
  {
    path: "/sample/sample1",
    component: React.lazy(() => import("./sample-2/container")),
  },
];
