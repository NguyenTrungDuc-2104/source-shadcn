import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useCommonStore from "../../../../zustand/Common";
import { setAuthToken } from "./jwt-api";

const DEFAULT_USER = {
  id: 1,
  uid: "1",
  displayName: "Admin",
  email: "admin@gmail.com",
  photoURL: "",
  role: "admin",
};

interface JWTAuthContextProps {
  user: any | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  data: any[];
}

interface JWTAuthAuthProviderProps {
  children: ReactNode;
}

export interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export interface SignInProps {
  userName: string;
  password: string;
}

interface JWTAuthActionsProps {
  signUpUser: (data: SignUpProps) => void;
  signInUser: (data: SignInProps) => void;
  logout: () => void;
}

const JWTAuthContext = createContext<JWTAuthContextProps>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  data: [],
});
const JWTAuthActionsContext = createContext<JWTAuthActionsProps>({
  signUpUser: () => {},
  signInUser: () => {},
  logout: () => {},
});

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider: React.FC<JWTAuthAuthProviderProps> = ({
  children,
}) => {
  const [firebaseData, setJWTAuthData] = useState<JWTAuthContextProps>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    data: [],
  });
  const { fetchStart, fetchSuccess } = useCommonStore((state) => state);

  useEffect(() => {
    const getAuthUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setJWTAuthData({
          user: DEFAULT_USER,
          isLoading: false,
          isAuthenticated: false,
          data: [],
        });
        return;
      } else {
        setJWTAuthData({
          user: DEFAULT_USER,
          isLoading: false,
          isAuthenticated: true,
          data: [],
        });
        return;
      }
    };

    getAuthUser();
  }, []);

  const signInUser = async ({ userName, password }: any) => {
    console.log(userName, password);
    fetchStart();

    setAuthToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6InBtQGdvdHJ1c3Qudm4iLCJQaG9uZSI6IjA4NTkxMTQwODQiLCJFbWFpbCI6InBtQGdvdHJ1c3Qudm4iLCJBcGlSb2xlIjoiQWNjb3VudE1hbmFnZW1lbnRfRGVsZXRlJEFjY291bnRNYW5hZ2VtZW50X1JlYWRzJEFjY291bnRNYW5hZ2VtZW50X0ltcG9ydCRBY2NvdW50TWFuYWdlbWVudF9FeHBvcnQkVGlja2V0TWFuYWdlbWVudF9DcmVhdGUkVGlja2V0TWFuYWdlbWVudF9VcGRhdGUkVGlja2V0TWFuYWdlbWVudF9EZWxldGUkVGlja2V0TWFuYWdlbWVudF9FeHBvcnQkSG9zcGl0YWxNYW5hZ2VtZW50X0NyZWF0ZSRIb3NwaXRhbE1hbmFnZW1lbnRfVXBkYXRlJEhvc3BpdGFsTWFuYWdlbWVudF9JbXBvcnQkSG9zcGl0YWxNYW5hZ2VtZW50X0RlbGV0ZSRDdXN0b21lck1hbmFnZW1lbnRfQ3JlYXRlJEN1c3RvbWVyTWFuYWdlbWVudF9VcGRhdGUkQ3VzdG9tZXJNYW5hZ2VtZW50X0RlbGV0ZSRDdXN0b21lck1hbmFnZW1lbnRfUmVhZHMkQ3VzdG9tZXJNYW5hZ2VtZW50X0ltcG9ydCRDdXN0b21lck1hbmFnZW1lbnRfRXhwb3J0JENoYXRNYW5hZ2VtZW50X1JlYWRzJERvY3Rvck1hbmFnZW1lbnRfQ3JlYXRlJERvY3Rvck1hbmFnZW1lbnRfVXBkYXRlJERvY3Rvck1hbmFnZW1lbnRfUmVhZHMkRG9jdG9yTWFuYWdlbWVudF9JbXBvcnQkRG9jdG9yTWFuYWdlbWVudF9FeHBvcnQkRG9jdG9yTWFuYWdlbWVudF9EZWxldGUkU3ltcHRvbU1hbmFnZW1lbnRfRGVsZXRlJEFjY291bnRNYW5hZ2VtZW50X0NyZWF0ZSRBY2NvdW50TWFuYWdlbWVudF9VcGRhdGUkSGVhbHRoUmVjb3Jkc01hbmFnZW1lbnRfVXBkYXRlJFRpY2tldE1hbmFnZW1lbnRfRXhwb3J0JEFjY291bnRNYW5hZ2VtZW50X1JlYWQkQ29tbXBhbnlNYW5hZ2VtZW50X1JlYWRzJENvbW1wYW55TWFuYWdlbWVudF9DcmVhdGUkU3ltcHRvbU1hbmFnZW1lbnRfQ3JlYXRlJFJvbGVNYW5hZ2VtZW50X0NyZWF0ZSRSb2xlTWFuYWdlbWVudF9SZWFkcyRQZXJtaXNzaW9uTWFuYWdlbWVudF9SZWFkcyRQZXJtaXNzaW9uTWFuYWdlbWVudF9DcmVhdGUkUGVybWlzc2lvbk1hbmFnZW1lbnRfVXBkYXRlJFNldHRpbmdBZG1pbk1hbmFnZW1lbnRfVXBkYXRlJFNldHRpbmdBZG1pbk1hbmFnZW1lbnRfUmVhZHMkU3ltcHRvbU1hbmFnZW1lbnRfVXBkYXRlJFN5bXB0b21NYW5hZ2VtZW50X1JlYWRzJFNwZWNpYWxpc3RNYW5hZ2VtZW50X1JlYWRzJFNwZWNpYWxpc3RNYW5hZ2VtZW50X0RlbGV0ZSRTcGVjaWFsaXN0TWFuYWdlbWVudF9DcmVhdGUkU3BlY2lhbGlzdE1hbmFnZW1lbnRfVXBkYXRlJERhc2hCb2FyZE1hbmFnZW1lbnRfUmVhZHMkSGVhbHRoUmVjb3Jkc01hbmFnZW1lbnRfUmVhZHMkSGVhbHRoUmVjb3Jkc01hbmFnZW1lbnRfRGVsZXRlJEhlYWx0aFJlY29yZHNNYW5hZ2VtZW50X0NyZWF0ZSIsIm5iZiI6MTY2NjkzODgxOCwiZXhwIjoxNjY2OTY3NjE4LCJpYXQiOjE2NjY5Mzg4MTh9.GIlsGqSVqAgf6NfNQr9fRdVhjmHER4pQFRWgiJfPG7Y",
      "refresh"
    );
    setJWTAuthData({
      user: DEFAULT_USER,
      isAuthenticated: true,
      isLoading: false,
      data: [],
    });
    fetchSuccess();
  };

  const logout = async () => {
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      data: [],
    });
  };
  const signUpUser = () => {};

  return (
    <JWTAuthContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;
