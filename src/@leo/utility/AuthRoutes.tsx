import React, { ReactNode } from "react";
import { AppLoader } from "../index";
import { useAuthUser } from "./AuthHooks";

interface AuthRoutesProps {
  children: ReactNode;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const { isLoading } = useAuthUser();

  return isLoading ? <AppLoader /> : <>{children}</>;
};

export default AuthRoutes;
