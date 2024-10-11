import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { ModeToggle } from "@/components/mode-toggle";

import { Menu } from "lucide-react";

interface IPropsAppheader {
  onToggleDrawerMenu: (val: boolean) => void;
}

const AppHeader: FC<IPropsAppheader> = ({ onToggleDrawerMenu }) => {
  return (
    <div className="h-full py-3 pr-6 pl-3 md:pl-6 bg-gray-200 border-b border-gray-300 dark:border-inherit dark:bg-gray-900 flex items-center justify-between">
      <Button
        onClick={onToggleDrawerMenu.bind(null, true)}
        variant="ghost"
        className="sm:hidden p-2 mr-2"
      >
        <Menu />
      </Button>
      <div className="relative w-full mr-4">
        <IoSearchOutline className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 "
        />
      </div>

      <div className="flex items-center gap-6">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <LuUserCircle2 className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => localStorage.clear()}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AppHeader;
