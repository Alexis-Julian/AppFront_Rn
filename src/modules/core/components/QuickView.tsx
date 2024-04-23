"use client";

import { useAppContext } from "@/context";

export default function QuickView() {
	const { useComponent } = useAppContext();
	function NothingView() {
		return (
			<div className="h-full w-full flex items-center justify-center">
				<p className="text-4xl text-black font-extralight">
					No hay vistas cargadas
				</p>
			</div>
		);
	}

	return (
		<div className="h-full w-full">
			{useComponent ? useComponent : <NothingView />}
		</div>
	);
}
