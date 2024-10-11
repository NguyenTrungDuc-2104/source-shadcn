import { FC } from "react";
import {
  DrawerContent,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";
import routesConfig from "@/pages/routeConfig";
import MenuItem from "../MenuItem";
interface IPropsDrawer {
  open: boolean;
  onChangeDrawer: (val: boolean) => void;
}

const DrawerMenu: FC<IPropsDrawer> = ({ open, onChangeDrawer }) => {
  const closeDrawerHandler = () => {
    onChangeDrawer(false);
  };
  return (
    <Drawer open={open} onClose={closeDrawerHandler} direction="left">
      <DrawerContent className="h-full">
        <DrawerHeader className="relative p-0 mt-2">
          <DrawerTitle>
            <p className="text-center text-2xl p-6 ">Menu</p>
          </DrawerTitle>
          <DrawerDescription />
          <Button
            onClick={closeDrawerHandler}
            variant="ghost"
            className="absolute right-0 text-4xl "
          >
            <IoClose />
          </Button>
        </DrawerHeader>
        <div className="mt-6 px-6">
          {routesConfig.map((item) => {
            return <MenuItem key={item.id} menuItem={item} />;
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerMenu;
