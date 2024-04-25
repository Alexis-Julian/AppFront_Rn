export default function InputStyled({
	label,
	value,
	refFunction,
	onChange,
}: {
	label: string;
	value?: any;
	onChange?: any;
	refFunction?: any;
}) {
	console.log(value);
	return (
		<label className="form-control w-full max-w-xs ">
			<div className="label">
				<span className="label-text text-black">{label}</span>
			</div>
			<input
				type="text"
				name={label.toLowerCase()}
				placeholder="Escriba aqui"
				className="input input-bordered w-full max-w-xs bg-white text-black"
				onChange={(e) => onChange(e)}
				value={value}
			/>
		</label>
	);
}
