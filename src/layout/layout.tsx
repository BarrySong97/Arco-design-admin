import { Layout, Menu } from "@arco-design/web-react";
import Navbar from "./navbar";
import SideMenu from "./side-menu";
import { type RouteItem, routes } from "@/routes";
import { ReactNode, useCallback, useEffect, useMemo, useRef } from "react";
import SubMenu from "@arco-design/web-react/es/Menu/sub-menu";
import { Outlet } from "react-router-dom";

const MenuItem = Menu.Item;
function PageLayout() {
	const titleMapRef = useRef<Map<string, string>>(new Map<string, string>());
	const renderMenuItem = useCallback((icon: ReactNode, name: string) => {
		return (
			<div className="flex items-center gap-3 ">
				<span className="text-lg">{icon}</span>
				{name}
			</div>
		);
	}, []);

	const generateMenuItems = useCallback(
		(routes: RouteItem[]) => {
			return routes
				.filter((route) => !route.hideMenu)
				.map((route) => {
					if (route.children && route.children.length > 0) {
						return (
							<SubMenu
								key={route.path ?? "random"}
								title={renderMenuItem(route.icon, route.name ?? "redirect")}
							>
								{generateMenuItems(route.children)}
							</SubMenu>
						);
					}
					titleMapRef.current.set(
						route.path ?? "0731",
						route.name ?? "redirect",
					);
					return (
						<MenuItem key={route.path ?? "0731"}>
							{renderMenuItem(route.icon, route.name ?? "redirect")}
						</MenuItem>
					);
				});
		},
		[renderMenuItem],
	);
	const menuRoutes = useMemo(
		() => generateMenuItems(routes[0].children ?? []),
		[generateMenuItems],
	);

	return (
		<Layout>
			<Navbar />
			<div className="h-[calc(100vh-60px)] flex">
				<SideMenu menus={menuRoutes} />
				<Layout className={"flex-1 p-6 bg-[#F2F3F5]"}>
					<Outlet />
				</Layout>
			</div>
		</Layout>
	);
}

export default PageLayout;
