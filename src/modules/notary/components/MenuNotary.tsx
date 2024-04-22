export default function MenuNotary() {
	const navItemMenu = [
		{ name: "Crear Registro Notarial", component: "" },
		{ name: "Editar Registro Notarial", component: "" },
		{ name: "Eliminar Registro Notarial", component: "" },
		{ name: "Historial", component: "" },
		{ name: "Configuraciones", component: "" },
		{ name: "Reportar Error", component: "" },
		{ name: "Salir", component: "" },
	];

	function ItemNavNotary({ name }: { name: string }) {
		return (
			<li className="h-[80px] w-full  mb-3">
				<button className="uppercase size-full  btn text-white bg-black/80  hover:bg-black/30 hover:border-none hover:text-black text-lg">
					{name}
				</button>
			</li>
		);
	}

	return (
		<div className="size-full flex flex-col gap-4   rounded-lg p-1">
			<header className="h-[10%] relative  ">
				<p className="size-full flex items-center justify-center text-2xl text-white bg-black/80 uppercase rounded-t-lg  font-extrabold   ">
					Gestion de datos
				</p>
				<div className="absolute top-0  size-full  rounded-lg "></div>
			</header>
			<nav className="h-[90%] border-quaternary rounded-b-lg border-[0.1px] border-t-0 p-1 flex flex-col gap-4 text-2xl  ">
				<ul className="text-black">
					{navItemMenu.map((item, index) => {
						return <ItemNavNotary key={index} name={item.name} />;
					})}
				</ul>
			</nav>
		</div>
	);
}
