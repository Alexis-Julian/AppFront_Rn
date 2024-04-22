import MainTable from "@/modules/core/components/MainTable";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<main className="size-full  l p-2  relative  col-start-2 col-end-2 overflow-hidden ">
				<div className=" bg-white size-full rounded-lg overflow-hidden shadow-md shadow-secondary">
					<MainTable />
				</div>
			</main>
			<aside className="col-start-1 col-end-2 row-start-1 row-end-3 p-2 ">
				<div className="bg-white size-full rounded-lg shadow-lg shadow-secondary"></div>
			</aside>
		</>
	);
}
