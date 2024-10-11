import { IMenuItem } from "../shared/constants/AppConst";
import { Bot, SquareTerminal } from "lucide-react";
const routesConfig: IMenuItem[] = [
  {
    id: "home",
    title: "Home Page",
    icon: <SquareTerminal className="text-2xl" />,
    type: "item",
    path: "/home",
  },
  {
    id: "sample",
    title: "Spamle Page",
    icon: <Bot className="text-2xl" />,
    type: "collapse",
    path: "/sample",
    children: [
      {
        id: "sample.sample1",
        title: "Sample 1",
        type: "item",
        icon: <div className="pl-6 text-2xl" />,
        path: "/sample/sample1",
      },
      {
        id: "sample.sample2",
        title: "Sample 2",
        type: "item",
        icon: <div className="pl-6 text-2xl" />,
        path: "/sample/sample2",
      },
    ],
  },
];
export default routesConfig;
