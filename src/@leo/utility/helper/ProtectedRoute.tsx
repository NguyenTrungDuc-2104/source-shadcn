import { FC, PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthUser } from "../../utility/AuthHooks";
import { initialUrl } from "../../../shared/constants/AppConst";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthUser();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin", { replace: true });
    }
    if (isAuthenticated && pathname === "/") {
      navigate(initialUrl);
    }
  }, [navigate, isAuthenticated]);

  return children;
};

export default ProtectedRoute;
