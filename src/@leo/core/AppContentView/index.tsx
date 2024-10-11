import { FC } from "react";
import AppSuspense from "../AppSuspense";
import { Outlet } from "react-router-dom";

const AppContentView: FC = () => {
  return (
    <AppSuspense>
      <div className="p-4">
        <Outlet />
      </div>
    </AppSuspense>
  );
};

export default AppContentView;
