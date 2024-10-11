import { Button } from "@/components/ui/button";
import { FC } from "react";
import { initialUrl } from "@/shared/constants/AppConst";
import { Link } from "react-router-dom";
const Error404: FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-base font-semibold">404</p>
        <p className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </p>
        <p className="mt-6 text-base leading-7">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button className="mt-10 px-10">
          <Link to={initialUrl} replace>
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Error404;
