import { Button, Layout, Menu } from "@arco-design/web-react";
import { IconMenuFold, IconMenuUnfold } from "@arco-design/web-react/icon";
import { type FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Sider = Layout.Sider;
export type SidenuProps = {
	menus: JSX.Element[];
};
const SideMenu: FC<SidenuProps> = ({ menus }) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const menuWidth = collapsed ? 48 : 220;
	function toggleCollapse() {
		setCollapsed((collapsed) => !collapsed);
	}
	const navigate = useNavigate();
	const pathname = useLocation().pathname;
	return (
		<Sider
			width={menuWidth}
			collapsed={collapsed}
			onCollapse={setCollapsed}
			trigger={null}
			className={" h-full  z-10 bg-[var(--color-bg-2)]"}
			collapsible
			breakpoint="xl"
		>
			<div>
				<Menu
					style={{ height: "100%" }}
					collapse={collapsed}
					selectedKeys={[pathname]}
					onClickMenuItem={(item) => {
						navigate(item);
					}}
				>
					{menus}
				</Menu>
			</div>
			<Button
				size="small"
				onClick={toggleCollapse}
				className="absolute z-50 right-3 bottom-3 px-1 h-6"
			>
				{collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
			</Button>
		</Sider>
	);
};

export default SideMenu;
