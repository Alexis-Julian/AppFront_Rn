export default function InputOptionStyled({
	details,
	options,
	handleChange,
	value,
}: {
	details: string;
	options: Array<string>;
	handleChange?: any;
	value?: string;
}) {
	return (
		<select
			className="select w-full max-w-xs bg-white border-[0.5px] border-secondary/30 text-black mt-4"
			onChange={(e) => handleChange(e)}
			defaultValue={value || "DEFAULT"}
		>
			<option value="DEFAULT" disabled selected>
				{details}
			</option>
			{options.map((name, index) => {
				return (
					<option value={name} key={index}>
						{name}
					</option>
				);
			})}
		</select>
	);
}
