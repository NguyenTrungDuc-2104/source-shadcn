import { FC, useState, useEffect } from "react";
import AppVerticalMenu from "./components/AppVerticalNav";
import AppHeader from "./components/AppHeader";
import AppContentView from "../AppContentView";
import { ScrollArea } from "@/components/ui/scroll-area";
import DrawerMenu from "./components/DrawerMenu";
import useSizeWindow from "@/hooks/useSizeWindow";
import { cn } from "@/lib/utils";

const AppLayout: FC = () => {
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(true);
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);
  const [isDrawerMenu, setIsDrawerMenu] = useState<boolean>(false);
  const { width } = useSizeWindow();

  const isOpenMenu = isToggleMenu
    ? isToggleMenu
    : !isToggleMenu && isMouseHover;
  //==========================function============================
  const toggleMenuHandler = () => {
    setIsToggleMenu((prev) => !prev);
  };

  const mouseHoverHandler = (val: boolean) => {
    setIsMouseHover(val);
  };

  const changeDrawerMenuHandler = (val: boolean) => {
    setIsDrawerMenu(val);
  };

  useEffect(() => {
    if (width > 640) {
      setIsDrawerMenu(false);
    }
  }, [width]);

  return (
    <>
      <div className="flex relative">
        <AppVerticalMenu
          isOpenMenu={isOpenMenu}
          onMouseHover={mouseHoverHandler}
          onToggle={toggleMenuHandler}
        />
        <div
          className={cn(
            "w-full h-screen duration-200 sm:ml-16 ",
            isOpenMenu && "sm:ml-72"
          )}
        >
          <div className="h-16">
            <AppHeader onToggleDrawerMenu={changeDrawerMenuHandler} />
          </div>
          <ScrollArea style={{ height: "calc(100vh - 64px)" }}>
            <AppContentView />
          </ScrollArea>
        </div>
      </div>
      <DrawerMenu
        open={isDrawerMenu}
        onChangeDrawer={changeDrawerMenuHandler}
      />
    </>
  );
};

export default AppLayout;
