import { cn } from "@/lib/utils";
import { IMenuItem } from "@/shared/constants/AppConst";
import { FC, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

interface IPropsMenuItem {
  menuItem: IMenuItem;
  isMenuOpen?: boolean;
}

const MenuItem: FC<IPropsMenuItem> = ({ menuItem, isMenuOpen = true }) => {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHighlight =
    menuItem.type === "collapse"
      ? pathname.includes(menuItem.path)
      : pathname === menuItem.path;

  return (
    <>
      <li
        className={cn(
          "relative text-sm flex items-center gap-4 cursor-pointer p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
          "whitespace-nowrap text-ellipsis overflow-hidden",
          menuItem.spacing ? "mt-6" : "mt-1",
          isHighlight ? "bg-gray-50 dark:bg-gray-800" : "bg-inherit"
        )}
        onClick={
          menuItem.type === "collapse"
            ? () => {
                setIsOpenSubmenu((prev) => !prev);
              }
            : () => {
                navigate(menuItem.path as string);
              }
        }
      >
        {menuItem.icon && (
          <span className="text-sm block float-left">{menuItem.icon}</span>
        )}
        <span
          className={`text-base font-medium flex-1 duration-200 ${
            !isMenuOpen && "hidden"
          }`}
        >
          {menuItem.title}
        </span>

        {menuItem.type === "collapse" && isMenuOpen && (
          <BsChevronDown
            className={cn(
              "duration-200",
              isOpenSubmenu && isMenuOpen && " rotate-180"
            )}
          />
        )}
      </li>
      {isMenuOpen && menuItem.type === "collapse" && (
        <ul
          className={cn(
            "transition-all duration-200 overflow-hidden max-h-0 ",
            isOpenSubmenu && isMenuOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          {menuItem.children?.map((chil) => (
            <MenuItem key={chil.id} menuItem={chil} isMenuOpen={isMenuOpen} />
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuItem;
