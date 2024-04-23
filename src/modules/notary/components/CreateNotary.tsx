import React, { useState } from "react";
import InputStyled from "./InputSyled";
import StepperWithContent from "./StepsNotary";
import InputOptionStyled from "./InputOptionStyled";
import { DEPARTAMENTOS } from "../shared/consts";
export default function CreateNotary() {
	const [activeStep, setActiveStep] = React.useState(0);

	/* Porque nombre? */
	const [notarial, setNotarial] = useState({ localidad: "", departamento: "" });

	const escribanos = [];

	function SelectUbicationNota() {
		const handleChangeLocation = (e: any) => {
			notarial.localidad = e.target.value;
			const newNotarial = { ...notarial };
			setNotarial(newNotarial);
		};

		function handleChangeDepartment(e: any) {
			notarial.departamento = e.target.value;
			const newNotarial = { ...notarial };
			setNotarial(newNotarial);
		}

		return (
			<div className="p-1 grid grid-rows-3">
				<h3 className="text-black text-2xl font-bold text-center p-4   ">
					Ingrese ubicacion donde se ubica el registro notarial
				</h3>
				<div className="flex flex-col items-center gap-4">
					<InputOptionStyled
						details="Ingrese el departamento"
						options={DEPARTAMENTOS}
						handleChange={handleChangeLocation}
					/>
					<InputOptionStyled
						details="Ingrese localidad"
						options={DEPARTAMENTOS}
						handleChange={handleChangeDepartment}
					/>
				</div>
				<div className="flex items-center justify-center gap-5 ">
					<button className="btn w-[30%] text-black bg-white hover:border-green-500  hover:bg-green-500/70">
						Siguiente
					</button>
					<button className="btn  w-[30%] text-black bg-white hover:border-red-500 hover:bg-red-500/70 ">
						Cancelar
					</button>
				</div>
			</div>
		);
	}

	function creteNotarys() {}

	function revisionNotary() {}

	return (
		<div className="size-full">
			<header className="h-[25%] relative   ">
				<p className=" h-[40%] flex items-center justify-center text-2xl text-white bg-black/80 uppercase rounded-t-lg  font-extrabold   ">
					Crear Registro Notarial
				</p>
				<div className="h-[50%] text-sm breadcrumbs text-black w-full overflow-hidden ">
					<StepperWithContent activeStep={activeStep} />
				</div>
			</header>
			<form className="h-[75%] ">
				<SelectUbicationNota />
				{/* 	<section className="flex flex-col gap-2">
					<h2 className="w-[80%] mx-auto rounded-md p-2 text-2xl text-center text-white bg-black/80 mt-2">
						Crear escribano
					</h2>
					<div className="size-full flex flex-wrap flex-row justify-center ">
						<div className="mx-2">
							<InputStyled label={"Nombre"} />
						</div>
						<div className="mx-2">
							<InputStyled label={"Apellido"} />
						</div>
						<div className="mx-2">
							<InputStyled label={"Dni"} />
						</div>
						<div className="mx-2">
							<InputStyled label={"Email"} />
						</div>
					</div>
				</section>
				<section></section>
				<section></section> */}
			</form>
		</div>
	);
}
