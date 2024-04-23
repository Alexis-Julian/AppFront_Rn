"use client";
import MenuNotary from "@/modules/notary/components/MenuNotary";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
	const [useComponent, setComponent] = useState<any>(undefined);

	return (
		<AppContext.Provider
			value={{
				useComponent,
				setComponent,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
