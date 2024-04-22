import { PencilIcon } from "@heroicons/react/24/solid";
import { Chip, Tooltip, IconButton } from "@material-tailwind/react";

const TABLE_ROWS = [
	{
		department: "Capital",
		location: [
			{
				name: "Santa Rosa",
				affiliate: [
					{
						img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
						name: "John Michael",
						email: "john@creative-tim.com",
						job: "Manager",
						org: "Organization",
						online: true,
						date: "23/04/18",
					},
					{
						img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
						name: "Alexa Liras",
						email: "alexa@creative-tim.com",
						job: "Programator",
						org: "Developer",
						online: false,
						date: "23/04/18",
					},
					// Agrega aquí dos afiliados más para cumplir con el requisito mínimo de 4 por ciudad
					{
						img: "https://example.com/img.jpg",
						name: "Juan Pérez",
						email: "juan@example.com",
						job: "Analista",
						org: "Empresa",
						online: true,
						date: "23/04/18",
					},
					{
						img: "https://example.com/img.jpg",
						name: "María García",
						email: "maria@example.com",
						job: "Diseñador",
						org: "Empresa",
						online: true,
						date: "23/04/18",
					},
				],
			},
		],
	},
	{
		department: "Maraco",
		location: [
			{
				name: "General Pico",
				affiliate: [
					// Agrega aquí cuatro afiliados para cumplir con el requisito mínimo de 4 por ciudad
					{
						img: "https://example.com/img.jpg",
						name: "Carlos Rodríguez",
						email: "carlos@example.com",
						job: "Ingeniero",
						org: "Empresa",
						online: false,
						date: "23/04/18",
					},
					{
						img: "https://example.com/img.jpg",
						name: "Luisa Martínez",
						email: "luisa@example.com",
						job: "Gerente",
						org: "Empresa",
						online: true,
						date: "23/04/18",
					},
					{
						img: "https://example.com/img.jpg",
						name: "Pedro Sánchez",
						email: "pedro@example.com",
						job: "Desarrollador",
						org: "Empresa",
						online: true,
						date: "23/04/18",
					},
					{
						img: "https://example.com/img.jpg",
						name: "Ana Fernández",
						email: "ana@example.com",
						job: "Analista",
						org: "Empresa",
						online: false,
						date: "23/04/18",
					},
				],
			},
		],
	},
];

export default function ItemTable(
	{
		name,
		email,
		job,
		org,
		online,
		date,
		deparment,
		location,
	}: {
		name: string;
		email: string;
		job: string;
		org: string;
		online: string;
		date: string;
		deparment: string;
		location: string;
	},
	index: number
) {
	const isLast = index === TABLE_ROWS.length - 1;
	const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

	return (
		<tr key={name} className="text-sm">
			<td className={classes}>
				<div className="flex items-center gap-3">
					{/* @ts-ignore */}
					<div className="flex flex-col">
						{/* @ts-ignore */}
						<p color="blue-gray" className="font-normal">
							{name}
						</p>
						{/* @ts-ignore */}
						<p color="blue-gray" className="font-normal opacity-70">
							{email}
						</p>
					</div>
				</div>
			</td>
			<td className={classes}>
				<div className="flex flex-col">
					{/* @ts-ignore */}
					<p color="blue-gray" className="font-normal">
						{job}
					</p>
					{/* @ts-ignore */}
					<p color="blue-gray" className="font-normal opacity-70">
						{org}
					</p>
				</div>
			</td>
			<td className={classes}>
				<div className="w-max">
					<Chip
						variant="ghost"
						size="sm"
						value={online ? "Activo" : "Inactivo"}
						color={online ? "green" : "blue-gray"}
					/>
				</div>
			</td>
			<td className={classes}>
				{/* @ts-ignore */}
				<p color="blue-gray" className="font-normal">
					{date}
				</p>
			</td>
			<td className={classes}>
				<p>{deparment}</p>
			</td>
			<td className={classes}>
				<p>{location}</p>
			</td>
			<td className={classes}>
				<Tooltip content="Edit User">
					{/* @ts-ignore */}
					<IconButton variant="text">
						<PencilIcon className="h-4 w-4" />
					</IconButton>
				</Tooltip>
			</td>
		</tr>
	);
}
