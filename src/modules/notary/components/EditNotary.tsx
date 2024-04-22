export default function EditNotary() {
	function InputPrimary({ label }: { label: string }) {
		return (
			<label className="form-control w-full max-w-xs p-1">
				<div className="label ">
					<span className="label-text text-black">{label}</span>
				</div>
				<input
					type="text"
					placeholder="Escribir aqui.."
					className="input input-bordered w-full max-w-xs bg-white text-black"
				/>
			</label>
		);
	}
	const dep = [
		"Capital",
		"Maraco",
		"Rancul",
		"Quemu-Quemu",
		"Conhelo",
		"Utracan",
		"Hucal",
		"Realico",
		"Chapaleufu",
		"Atreuco",
		"Toay",
		"Trenel",
		"Puelen",
		"Loventue",
	];
	function InputSelectDep({
		details,
		options,
	}: {
		details: string;
		options: Array<string>;
	}) {
		return (
			<select className="select w-full max-w-xs bg-white border-[0.5px] border-secondary/30 text-black mt-4">
				<option disabled selected>
					{details}
				</option>
				{options.map((name, index) => {
					return <option key={index}>{name}</option>;
				})}
			</select>
		);
	}

	return (
		<div className="size-full  flex flex-col p-1">
			<header className="h-[10%] flex items-center justify-center bg-quaternary/5 rounded-md">
				<h2 className="text-2xl text-black font-medium ">Editar escribano</h2>
			</header>
			<form className="h-[90%] flex flex-col ">
				<div className="grid grid-cols-2  gap-4">
					<InputPrimary label={"Nombre"} />
					<InputPrimary label={"Telefono"} />
					<InputPrimary label={"Direccion"} />
					<InputPrimary label={"Email"} />
					<InputSelectDep details={"Ingrese su departamento"} options={dep} />
					<InputSelectDep details={"Ingrese su departamento"} options={dep} />
					<input type="checkbox" className="toggle bg-white " />
				</div>
				{/* 	<div>
					<button className="btn ">Guardar</button>
					<button className="btn">Cancelar</button>
				</div> */}
			</form>
		</div>
	);
}
