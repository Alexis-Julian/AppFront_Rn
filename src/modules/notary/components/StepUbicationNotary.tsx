import { DEPARTAMENTOS } from "../shared/consts";
import InputOptionStyled from "./InputOptionStyled";

export default function StepUbicationNotary({
	notarial,
	setNotarial,
}: {
	notarial: any;
	setNotarial: any;
}) {
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
					handleChange={handleChangeDepartment}
					value={notarial.departamento}
				/>
				<InputOptionStyled
					details="Ingrese localidad"
					options={DEPARTAMENTOS}
					handleChange={handleChangeLocation}
					value={notarial.localidad}
				/>
			</div>
		</div>
	);
}
