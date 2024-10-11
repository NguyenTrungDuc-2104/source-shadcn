import React from "react";

export const homePagesConfigs = [
  {
    path: "/home",
    component: React.lazy(() => import("./container")),
  },
];
