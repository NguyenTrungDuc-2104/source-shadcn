import { FC, PropsWithChildren } from "react";
import placeholder from "../../assets/placeholder.svg";
const AuthWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-background w-full h-full p-4 lg:p-0">
      <div className="w-full lg:grid lg:grid-cols-2 lg:min-h-[600px] xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">{children}</div>
        <div className="hidden bg-muted lg:block">
          <img
            src={placeholder}
            alt="Img"
            loading="lazy"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
