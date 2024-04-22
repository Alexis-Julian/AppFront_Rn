"use client";
import { useState } from "react";
export default function HeaderTable() {
	const [useOrderBy, setOrderBy] = useState({
		name: "" /* Si el nombre esta vacio significa que no hay restriccion si hay alguna letra empezara a buscar por esa letra */,
		estado: "T" /* Estado si esta buscando por vacante | todo | no vacante */,
		departamento:
			"" /* Si el deparatamento esta vacio significa que buscara todos los departamentos */,
		asc: [
			false,
			"",
		] /* Si el asc esta activado significara que buscara de manera ascendente segun el campo */,
		alphabetic: "",
	});

	function changeStateOrdinance(e: any) {
		e.preventDefault();
		const option: "T" | "V" | "NV" = e.nativeEvent.submitter.name;
		console.log(option);
		let newEstadoinOrder;
		switch (option) {
			case "NV":
				useOrderBy.estado = "NV";
				newEstadoinOrder = { ...useOrderBy };
				setOrderBy(newEstadoinOrder);
				break;
			case "V":
				useOrderBy.estado = "V";
				newEstadoinOrder = { ...useOrderBy };
				setOrderBy(newEstadoinOrder);
				break;
			case "T":
				useOrderBy.estado = "T";
				newEstadoinOrder = { ...useOrderBy };
				setOrderBy(newEstadoinOrder);
			default:
				break;
		}
	}

	return (
		<header className="bg-quaternary/5 shadow-sm shadow-black/5 m-2 rounded-md text-white">
			<section className="h-full flex justify-around  items-center">
				<label className="form-control w-full max-w-xs text-black">
					<div className="label">
						<span className="label-text">Buscar por nombre?</span>
					</div>
					<input
						type="text"
						placeholder="Escribe aqui..."
						className="input input-bordered w-full max-w-xs bg-white"
					/>
				</label>
				<section className="form-control w-full max-w-xs text-black">
					<div className="label">
						<span className="label-text">Buscar por estado?</span>
					</div>
					<form
						className="relative grid grid-cols-3 p-0 gap-0    btn btn-ghost hover:bg-white bg-white text-black border-none"
						onSubmit={changeStateOrdinance}
					>
						<button
							className="text-center w-full cursor-pointer  h-full z-50  "
							name="V"
						>
							V
						</button>
						<button className="text-center  w-full h-full z-50  " name="T">
							T
						</button>
						<button className="text-center  w-full h-full z-50  " name="NV">
							N.V
						</button>
						<div
							className={`absolute w-[33.3%] translate-x-[100%] transition-all rounded-sm  bg-secondary/20 h-full ${
								useOrderBy.estado == "NV" && "translate-x-[200%]"
							} ${useOrderBy.estado == "V" && "translate-x-[0%]"} `}
						></div>
					</form>
				</section>
				<label className="form-control w-full max-w-xs text-black">
					<div className="label">
						<span className="label-text">Buscar por departamento?</span>
					</div>
					<input
						type="text"
						placeholder="Escribe aqui..."
						className="input input-bordered w-full max-w-xs bg-white"
					/>
				</label>
			</section>
		</header>
	);
}
