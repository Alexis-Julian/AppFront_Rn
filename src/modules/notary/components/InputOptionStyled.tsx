export default function InputOptionStyled({
	details,
	options,
	handleChange,
}: {
	details: string;
	options: Array<string>;
	handleChange?: any;
}) {
	return (
		<select
			className="select w-full max-w-xs bg-white border-[0.5px] border-secondary/30 text-black mt-4"
			onChange={(e) => handleChange(e)}
		>
			<option disabled selected>
				{details}
			</option>
			{options.map((name, index) => {
				return <option key={index}>{name}</option>;
			})}
		</select>
	);
}
