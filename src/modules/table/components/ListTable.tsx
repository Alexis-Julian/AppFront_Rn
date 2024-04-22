"use client";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Card, CardBody } from "@material-tailwind/react";
import ItemTable from "./ItemTable";

const TABS = [
	{
		label: "All",
		value: "all",
	},
	{
		label: "Monitored",
		value: "monitored",
	},
	{
		label: "Unmonitored",
		value: "unmonitored",
	},
];

const TABLE_HEAD = [
	"REG. Nº",
	"Escribano",
	"T. Escribano",
	"Localidad",
	"Departamento",
	"Estado",
	"",
];

const TABLE_ROWS = [
	{
		department: "Capital",
		location: [
			{
				name: "Rancul",
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
			{
				name: "Caleufu",
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
			{
				name: "Eduardo Castex",
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
];

export default function SortableTable() {
	return (
		// @ts-ignore
		// @ts-ignore
		<Card className="h-full w-full  overflow-hidden">
			{/* @ts-ignore */}
			<CardBody className="py-0 overflow-y-auto  px-0">
				<table className="mt-4 w-full min-w-max table-auto text-left ">
					<thead className="">
						<tr>
							{TABLE_HEAD.map((head, index) => (
								<th
									key={head}
									className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
								>
									{/* @ts-ignore */}
									<p
										color="blue-gray"
										className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 text-sm"
									>
										{head}{" "}
										{index !== TABLE_HEAD.length - 1 && (
											<ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
										)}
									</p>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{TABLE_ROWS.map(({ department, location }: any, index) => {
							const dep = department;
							return location.map((location: any) => {
								const loc = location.name;
								return location.affiliate.map((afi: any, index: number) => {
									return (
										<ItemTable
											key={index}
											{...{ ...afi, deparment: dep, location: loc, index }}
										/>
									);
								});
							});
						})}
					</tbody>
				</table>
			</CardBody>
		</Card>
	);
}
