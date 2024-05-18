import { Avatar, Dropdown, Menu } from "@arco-design/web-react";
import DefaultAvatar from "@/assets/default-avatar.jpg";
import type { FC } from "react";

const Navbar: FC = () => {
	const droplist = (
		<Menu>
			<Menu.Item key="logout">Log Out</Menu.Item>
		</Menu>
	);
	return (
		<div className="z-50 fiexed h-[60px] bg-[var(--color-bg-2)] px-8 w-full flex justify-between border-b-[1px] border-b-[var(--color-border)]">
			<div className="flex   items-center font-sans gap-2  font-medium text-[var(--color-text-1)] text-xl">
				<img src="/logo.svg" alt="logo" />
				Arco Pro Admin
			</div>
			<div className="flex items-center">
				<Dropdown droplist={droplist} position="br">
					<Avatar size={32} style={{ cursor: "pointer" }}>
						<img alt="avatar" src={DefaultAvatar} />
					</Avatar>
				</Dropdown>
			</div>
		</div>
	);
};

export default Navbar;
