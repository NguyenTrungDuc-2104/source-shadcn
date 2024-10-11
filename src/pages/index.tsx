import { initialUrl } from "@/shared/constants/AppConst";
import { homePagesConfigs } from "./main/home";
import { samplePagesConfigs } from "./main/sample";
import { authRouteConfig } from "./auth";
import { errorPagesConfigs } from "./errors";

const authorizedStructure = {
  fallbackPath: "/signin",
  routes: [...samplePagesConfigs, ...homePagesConfigs],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};

const anonymousStructure = {
  routes: errorPagesConfigs,
};

export { authorizedStructure, unAuthorizedStructure, anonymousStructure };
