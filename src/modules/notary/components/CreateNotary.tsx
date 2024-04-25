import React, { useState } from "react";
import StepperWithContent from "./StepsNotary";
import InputOptionStyled from "./InputOptionStyled";
import { DEPARTAMENTOS } from "../shared/consts";
import InputStyled from "./InputSyled";
import StepUbicationNotary from "./StepUbicationNotary";
export default function CreateNotary() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [isLastStep, setIsLastStep] = React.useState(false);
	const [isFirstStep, setIsFirstStep] = React.useState(false);

	const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
	const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

	/* Este estado va recibir en que escribano se cambia */
	const [useTypeNotary, setTypeNotary] = useState<
		"titular" | "reciproco" | "adscripto"
	>("titular");

	/* Porque nombre? */
	const [notarial, setNotarial] = useState({
		localidad: "",
		departamento: "",
		escribanoTitular: {
			nombre: "",
			apellido: "",
			dni: "",
			email: "",
		},
		escribanoReciproco: {
			nombre: "",
			apellido: "",
			dni: "",
			email: "",
		},
		escribanoAdscripto: {
			nombre: "",
			apellido: "",
			dni: "",
			email: "",
		},
	});

	function handleSubmitForm(e: any) {
		e.preventDefault();
	}

	function SelectUbicationNota() {}

	function CreateEscribanos() {
		const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
			const NotarySelectedName = {
				titular: () => (notarial.escribanoTitular.nombre = e.target.value),
				reciproco: () => (notarial.escribanoReciproco.nombre = e.target.value),
				adscripto: () => (notarial.escribanoAdscripto.nombre = e.target.value),
			};

			NotarySelectedName[useTypeNotary] && NotarySelectedName[useTypeNotary]();
			const newNotarial = { ...notarial };
			setNotarial(newNotarial);
		};
		const handleChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
			const NotarySelectedSurname = {
				titular: () => (notarial.escribanoTitular.apellido = e.target.value),
				reciproco: () =>
					(notarial.escribanoReciproco.apellido = e.target.value),
				adscripto: () =>
					(notarial.escribanoAdscripto.apellido = e.target.value),
			};

			NotarySelectedSurname[useTypeNotary] &&
				NotarySelectedSurname[useTypeNotary]();

			const newNotarial = { ...notarial };
			setNotarial(newNotarial);
		};
		const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
			const NotarySelectedEmail = {
				titular: () => (notarial.escribanoTitular.email = e.target.value),
				reciproco: () => (notarial.escribanoReciproco.email = e.target.value),
				adscripto: () => (notarial.escribanoAdscripto.email = e.target.value),
			};

			NotarySelectedEmail[useTypeNotary] &&
				NotarySelectedEmail[useTypeNotary]();

			const newNotarial = { ...notarial };
			setNotarial(newNotarial);
		};
		const handleChangeDni = (e: React.ChangeEvent<HTMLInputElement>) => {
			const NotarySelectedDni = {
				titular: () => (notarial.escribanoTitular.dni = e.target.value),
				reciproco: () => (notarial.escribanoReciproco.dni = e.target.value),
				adscripto: () => (notarial.escribanoAdscripto.dni = e.target.value),
			};

			NotarySelectedDni[useTypeNotary] && NotarySelectedDni[useTypeNotary]();

			const newNotarial = { ...notarial };
			setNotarial(newNotarial);
		};

		const PassValueByProperty = (prop: string) => {};

		return (
			<div className="size-full   flex flex-col ">
				<h3 className="text-2xl text-center text-black ">
					Datos del escribano - TITULAR
				</h3>
				<div className="  grid grid-rows-2 h-full">
					<section className="flex flex-wrap flex-row justify-center">
						<div className="mx-2">
							<InputStyled
								label={"Nombre"}
								onChange={handleChangeName}
								value={
									useTypeNotary == "titular"
										? notarial.escribanoTitular.nombre
										: useTypeNotary == "reciproco"
										? notarial.escribanoReciproco.nombre
										: notarial.escribanoAdscripto.nombre
								}
							/>
						</div>
						<div className="mx-2">
							<InputStyled
								label={"Apellido"}
								onChange={handleChangeSurname}
								value={PassValueByProperty("Apellido")}
							/>
						</div>
						<div className="mx-2">
							<InputStyled
								label={"Dni"}
								onChange={handleChangeEmail}
								value={PassValueByProperty("Dni")}
							/>
						</div>
						<div className="mx-2">
							<InputStyled
								label={"Email"}
								onChange={handleChangeDni}
								value={PassValueByProperty("Email")}
							/>
						</div>
					</section>
					<section className="grid grid-cols-3 items-center justify-center gap-2 p-2 relative">
						<div
							className={`absolute w-[33%] h-[4px] rounded-full mx-1 transition-all  bg-black/80 top-0  ${
								useTypeNotary === "reciproco" && "translate-x-[100%]"
							} ${useTypeNotary === "adscripto" && "translate-x-[200%]"}`}
						></div>
						<div
							onClick={() => setTypeNotary("titular")}
							className="size-full cursor-pointer hover:scale-95 transition-all bg-black/80 text-white rounded-md  mx-auto"
						>
							<p className="font-bold text-center w-full mt-2">TITULAR</p>
						</div>
						<div
							onClick={() => setTypeNotary("reciproco")}
							className="size-full cursor-pointer hover:scale-95 transition-all bg-black/80 text-white rounded-md  mx-auto"
						>
							<p className="font-bold text-center w-full mt-2">RECIPROCO</p>
						</div>
						<div
							onClick={() => setTypeNotary("adscripto")}
							className="size-full cursor-pointer hover:scale-95 transition-all bg-black/80 text-white rounded-md  mx-auto"
						>
							<p className="font-bold text-center w-full mt-2">ADSCRIPTO</p>
						</div>
					</section>
				</div>
			</div>
		);
	}

	function RevisionEscribanos() {
		return <div></div>;
	}

	return (
		<div className="size-full">
			<header className="h-[25%] relative   ">
				<p className=" h-[40%] flex items-center justify-center text-2xl text-white bg-black/80 uppercase rounded-t-lg  font-extrabold   ">
					Crear Registro Notarial
				</p>
				<div className="h-[50%] text-sm breadcrumbs text-black w-full overflow-hidden ">
					<StepperWithContent
						activeStep={activeStep}
						setIsLastStep={setIsLastStep}
						setIsFirstStep={setIsFirstStep}
					/>
				</div>
			</header>
			<form className="h-[65%] " onSubmit={handleSubmitForm}>
				{activeStep == 0 && (
					<StepUbicationNotary notarial={notarial} setNotarial={setNotarial} />
				)}
				{activeStep == 1 && <CreateEscribanos />}
				{activeStep == 2 && <RevisionEscribanos />}
			</form>
			<div className="flex justify-around h-[10%] items-center  ">
				<button
					className={`btn w-[30%] text-black bg-white  hover:text-white `}
					onClick={handlePrev}
					disabled={isFirstStep}
				>
					Atras
				</button>
				<button
					className="btn  w-[30%] text-black bg-white   hover:text-white"
					onClick={handleNext}
				>
					Siguiente
				</button>
			</div>
		</div>
	);
}
