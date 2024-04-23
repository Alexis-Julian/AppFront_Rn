import InputOptionStyled from "./InputOptionStyled";
import { DEPARTAMENTOS as dep } from "../shared/consts";

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
					<InputOptionStyled
						details={"Ingrese su departamento"}
						options={dep}
					/>
					<InputOptionStyled
						details={"Ingrese su departamento"}
						options={dep}
					/>
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
