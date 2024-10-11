import { FC } from "react";
import { cn } from "@/lib/utils";
import routesConfig from "../../../../../pages/routeConfig";
import { Triangle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MenuItem from "../MenuItem";

interface IPropsVerticalNav {
  isOpenMenu: boolean;
  onToggle: () => void;
  onMouseHover: (val: boolean) => void;
}

const AppVerticalMenu: FC<IPropsVerticalNav> = ({
  onToggle,

  onMouseHover,
  isOpenMenu,
}) => {
  return (
    <ScrollArea className="h-screen">
      <div
        className={cn(
          "h-full bg-gray-200 dark:bg-gray-900 border-r border-gray-300 dark:border-inherit duration-200 ",
          "max-h-screen overflow-auto fixed top-0 hidden sm:block",
          isOpenMenu ? "w-72" : "w-16"
        )}
      >
        <div
          className="h-16 sticky top-0 cursor-pointer pl-5 bg-inherit z-10 flex items-center border-b border-gray-300 dark:border-inherit"
          onClick={onToggle}
        >
          <Triangle
            className={cn(
              " mr-2 duration-500",
              isOpenMenu && "rotate-[360deg]"
            )}
          />
          <h1
            className={cn(
              " overflow-hidden font-medium text-2xl duration-300",
              !isOpenMenu && "max-w-0"
            )}
          >
            Playground
          </h1>
        </div>

        <div
          className="p-3 pt-2"
          onMouseMove={() => {
            onMouseHover(true);
          }}
          onMouseLeave={() => {
            onMouseHover(false);
          }}
        >
          {routesConfig.map((item) => {
            return (
              <MenuItem key={item.id} isMenuOpen={isOpenMenu} menuItem={item} />
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
};

export default AppVerticalMenu;
