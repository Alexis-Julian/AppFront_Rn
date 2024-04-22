// @ts-ignore

"use client";
import React from "react";

import {
	CubeTransparentIcon,
	UserCircleIcon,
	CodeBracketSquareIcon,
	Square3Stack3DIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
	RocketLaunchIcon,
	Bars2Icon,
} from "@heroicons/react/24/solid";
import {
	Menu,
	MenuHandler,
	Button,
	Avatar,
	MenuList,
	MenuItem,
	Typography,
	Card,
	Navbar,
	IconButton,
	MobileNav,
} from "@material-tailwind/react";

// profile menu component
const profileMenuItems = [
	{
		label: "My Profile",
		icon: UserCircleIcon,
	},
	{
		label: "Edit Profile",
		icon: Cog6ToothIcon,
	},
	{
		label: "Inbox",
		icon: InboxArrowDownIcon,
	},
	{
		label: "Help",
		icon: LifebuoyIcon,
	},
	{
		label: "Sign Out",
		icon: PowerIcon,
	},
];

function ProfileMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				{/* @ts-ignore */}
				<Button
					variant="text"
					color="blue-gray"
					className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
				>
					{/* @ts-ignore */}
					<Avatar
						variant="circular"
						size="md"
						alt="tania andrew"
						className="border border-gray-900 p-0.5"
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? "rotate-180" : ""
						}`}
					/>
				</Button>
			</MenuHandler>
			{/* @ts-ignore */}
			<MenuList className="p-1">
				{profileMenuItems.map(({ label, icon }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					{
						/* @ts-ignore */
					}
					return (
						/*  @ts-ignore  */
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex items-center gap-2 rounded ${
								isLastItem
									? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
									: ""
							}`}
						>
							{React.createElement(icon, {
								className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
								strokeWidth: 2,
							})}
							{/* @ts-ignore */}
							<Typography
								as="span"
								variant="small"
								className="font-normal"
								color={isLastItem ? "red" : "inherit"}
							>
								{label}
							</Typography>
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
}

// nav list menu
const navListMenuItems = [
	{
		title: "@material-tailwind/html",
		description:
			"Learn how to use @material-tailwind/html, packed with rich components and widgets.",
	},
	{
		title: "@material-tailwind/react",
		description:
			"Learn how to use @material-tailwind/react, packed with rich components for React.",
	},
	{
		title: "Material Tailwind PRO",
		description:
			"A complete set of UI Elements for building faster websites in less time.",
	},
];

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems.map(({ title, description }) => (
		<a href="#" key={title}>
			{/* @ts-ignore */}
			<MenuItem>
				{/* @ts-ignore */}
				<Typography variant="h6" color="blue-gray" className="mb-1">
					{title}
				</Typography>
				{/* @ts-ignore */}
				<Typography variant="small" color="gray" className="font-normal">
					{description}
				</Typography>
			</MenuItem>
		</a>
	));

	return (
		<React.Fragment>
			<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
				<MenuHandler>
					{/* @ts-ignore */}
					<p className="font-normal">
						{/* @ts-ignore */}
						<MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
							<Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
							Pages{" "}
							<ChevronDownIcon
								strokeWidth={2}
								className={`h-3 w-3 transition-transform ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</MenuItem>
					</p>
				</MenuHandler>
				{/* @ts-ignore */}
				<MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
					{/* @ts-ignore */}
					<Card
						color="blue"
						shadow={false}
						variant="gradient"
						className="col-span-3 grid h-full w-full place-items-center rounded-md"
					>
						<RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
					</Card>
					<ul className="col-span-4 flex w-full flex-col gap-1">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			{/* @ts-ignore */}
			{/* Renderizacion en movil */}
			{/* <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
				<Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
				Paages{" "}
			</MenuItem>
			<ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
				
			</ul> */}
		</React.Fragment>
	);
}

// nav list component
const navListItems = [
	{
		label: "Account",
		icon: UserCircleIcon,
	},
	{
		label: "Blocks",
		icon: CubeTransparentIcon,
	},
	{
		label: "Docs",
		icon: CodeBracketSquareIcon,
	},
];

function NavList() {
	return (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
			<NavListMenu />
			{navListItems.map(({ label, icon }, key) => (
				// @ts-ignore
				<p
					key={label}
					color="gray"
					className="font-medium text-blue-gray-500 text-md"
				>
					{/* @ts-ignore */}
					<MenuItem className="flex items-center gap-2 lg:rounded-full">
						{React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
						<span className="text-gray-900"> {label}</span>
					</MenuItem>
				</p>
			))}
		</ul>
	);
}

export default function NavBar() {
	const [isNavOpen, setIsNavOpen] = React.useState(false);

	const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setIsNavOpen(false)
		);
	}, []);

	return (
		<header className="h-full w-full p-2 ">
			{/* @ts-ignore */}
			<Navbar className="p-2 lg:rounded-lg lg:w-full h-full w-full  flex text-md  ">
				<div className="relative mx-auto w-full flex items-center justify-between text-blue-gray-900">
					{/* @ts-ignore */}
					<p className="mr-4 ml-2  py-1.5 font-lg text-xl">Dashboard</p>
					<div className="hidden lg:block">
						<NavList />
					</div>
					{/* @ts-ignore */}
					<IconButton
						size="sm"
						color="blue-gray"
						variant="text"
						onClick={toggleIsNavOpen}
						className="ml-auto mr-2 lg:hidden"
					>
						<Bars2Icon className="h-6 w-6" />
					</IconButton>
					{/* @ts-ignore */}

					<ProfileMenu />
				</div>
				{/* <MobileNav open={isNavOpen} className="overflow-scroll">
					<NavList />
				</MobileNav> */}
			</Navbar>
		</header>
	);
}
