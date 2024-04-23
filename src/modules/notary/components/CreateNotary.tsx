import InputStyled from "./InputSyled";
import StepperWithContent from "./StepsNotary";

export default function CreateNotary() {
	const escribanos = [];

	function SelectUbicationNota() {
		return <></>;
	}

	function creteNotarys() {}

	function revisionNotary() {}

	return (
		<div className="size-full">
			<header className="h-[10%] relative  ">
				<p className="size-full flex items-center justify-center text-2xl text-white bg-black/80 uppercase rounded-t-lg  font-extrabold   ">
					Crear Registro Notarial
				</p>
				<div className="text-sm breadcrumbs text-black w-full ">
					<StepperWithContent />
				</div>
			</header>
			<form className="h-[90%] grid grid-rows-3">
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
