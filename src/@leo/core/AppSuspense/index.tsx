import React from "react";
import { AppLoader } from "../../index";

interface IAppSuspense {
  children: React.ReactNode;
}

const AppSuspense: React.FC<IAppSuspense> = ({ children }) => {
  return <React.Suspense fallback={<AppLoader />}>{children}</React.Suspense>;
};

export default AppSuspense;
