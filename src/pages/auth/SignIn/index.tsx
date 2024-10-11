import { FC } from "react";
import AuthWrapper from "../AuthWrapper";
import SigninJwtAuth from "./SigninJwtAuth";

const Signin: FC = () => {
  return (
    <AuthWrapper>
      <SigninJwtAuth />
    </AuthWrapper>
  );
};

export default Signin;
