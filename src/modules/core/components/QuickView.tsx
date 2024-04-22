"use client";

import { useEffect, useState } from "react";

export default function QuickView({
	useComponent,
}: {
	useComponent: React.ReactNode;
}) {
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
