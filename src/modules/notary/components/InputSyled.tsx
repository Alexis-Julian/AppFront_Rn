export default function InputStyled({ label }: { label: string }) {
	return (
		<label className="form-control w-full max-w-xs ">
			<div className="label">
				<span className="label-text text-black">{label}</span>
			</div>
			<input
				type="text"
				placeholder="Escriba aqui"
				className="input input-bordered w-full max-w-xs bg-white text-black"
			/>
		</label>
	);
}
