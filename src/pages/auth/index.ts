import React from "react";

export const authRouteConfig = [
  {
    path: "/signin",
    component: React.lazy(() => import("./SignIn")),
  },
  //   {
  //     path: "/signup",
  //     component: React.lazy(() => import("./SignUp")),
  //   },
];
