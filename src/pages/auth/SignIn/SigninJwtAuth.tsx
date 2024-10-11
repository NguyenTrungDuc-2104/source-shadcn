import { SignInProps } from "@/@leo/services/auth/jwt-auth/JWTAuthProvider";
import { useAuthMethod, useAuthUser } from "@/@leo/utility/AuthHooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { initialUrl } from "@/shared/constants/AppConst";
import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
const SigninJwtAuth: FC = () => {
  const { signInUser } = useAuthMethod();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthUser();
  useEffect(() => {
    if (isAuthenticated) {
      navigate(initialUrl, { replace: true });
    }
  }, [isAuthenticated]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>();

  const hanldeOnSubmit: SubmitHandler<SignInProps> = (data) => {
    signInUser(data);
  };

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      <form onSubmit={handleSubmit(hanldeOnSubmit)} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("userName", { required: true })}
            id="email"
            type="email"
            placeholder="m@example.com"
          />
          {errors.userName && (
            <p className="ct-error-input">Vui lòng điền tài khoản đăng nhập</p>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="pasword">Pasword</Label>
            <Link to={"/"} className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>
          </div>
          <Input
            {...register("password", { required: true })}
            id="pasword"
            type="password"
          />
          {errors.password && (
            <p className="ct-error-input">Vui lòng điền mật khẩu</p>
          )}
        </div>

        <Button onClick={handleSubmit(hanldeOnSubmit)}>Login</Button>
        <Button variant="outline">Login with Google</Button>
      </form>

      <div className="mt-4 text-center text-sm">
        Don't have an account?<Link to={"/"}>Sign up</Link>
      </div>
    </div>
  );
};
export default SigninJwtAuth;
