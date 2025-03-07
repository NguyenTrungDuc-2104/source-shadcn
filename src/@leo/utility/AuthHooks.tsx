// ForJWT Auth
import { getUserFromJwtAuth } from "./helper/AuthHelper";
import {
  useJWTAuth,
  useJWTAuthActions,
} from "../services/auth/jwt-auth/JWTAuthProvider";

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading, data } = useJWTAuth();

  return {
    isLoading,
    isAuthenticated,
    user: getUserFromJwtAuth(user),
    data: data,
  };
};

export const useAuthMethod = () => {
  const { signInUser, signUpUser, logout } = useJWTAuthActions();

  return {
    signInUser,
    logout,
    signUpUser,
  };
};
