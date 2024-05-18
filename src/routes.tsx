import {
	type RouteObject,
	createBrowserRouter,
	Navigate,
} from "react-router-dom";
import PageLayout from "./layout/layout";
import Admins from "./pages/Admins";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";
import { IconApps, IconUser } from "@arco-design/web-react/icon";
import {
	CarbonUserRole,
	MaterialSymbolsAdminPanelSettingsOutline,
	StreamlineComputerDesktopBlockDesktopDeviceDisplayDisablePermissionComputer,
} from "./layout/icon";

export type RouteItem = {
	path?: string;
	name?: string;
	icon?: React.ReactNode;
	index?: boolean;
	hideMenu?: boolean;
	hideBreadcrumb?: boolean;
	element?: React.ReactNode;
	children?: RouteItem[];
};

export const routes: RouteItem[] = [
	{
		path: "/",
		name: "Arco Design Admin",
		element: <PageLayout />,
		children: [
			{
				index: true,
				element: <Navigate to={"/admins"} replace />,
				hideMenu: true,
			}, // 根路径重定向

			{
				path: "/admins",
				icon: <MaterialSymbolsAdminPanelSettingsOutline />,
				name: "Admins",
				element: <Admins />,
			},
			{
				path: "/roles",
				icon: <CarbonUserRole />,
				name: "Roles",
				element: <Roles />,
			},
			{
				icon: (
					<StreamlineComputerDesktopBlockDesktopDeviceDisplayDisablePermissionComputer />
				),
				path: "/permissions",
				name: "Permissions",
				element: <Permissions />,
			},
		],
	},
	{
		path: "/singIn",
		name: "Sign In",
	},
];
const generateRoutesConfig = (routes: RouteItem[]): RouteObject[] => {
	return routes.map((route: RouteItem) => {
		const routeConfig = {
			path: route.path,
			element: route.element,
			index: route.index as true,
			children: route.children
				? generateRoutesConfig(route.children)
				: undefined,
		};
		return routeConfig;
	}) as RouteObject[];
};
export const reactRoutesConfig = createBrowserRouter(
	generateRoutesConfig(routes),
);
