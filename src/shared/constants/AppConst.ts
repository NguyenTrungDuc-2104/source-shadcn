import { ReactNode } from "react";

export const authRole = {
  admin: ["admin"],
  user: ["user", "admin"],
};

export enum RoutePermittedRole {
  Admin = "admin",
  User = "user",
}

type TypeMenu = "item" | "collapse";

export interface IMenuItem {
  id: string;
  title: string;
  type: TypeMenu;
  path: string;
  icon?: ReactNode;
  spacing?: boolean;
  children?: IMenuItem[];
}

export const initialUrl = "/home"; // this url will open after login
