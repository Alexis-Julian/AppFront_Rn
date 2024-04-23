import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
	CogIcon,
	UserIcon,
	BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

export default function StepperWithContent() {
	const [activeStep, setActiveStep] = React.useState(0);

	return (
		<div className="w-[80%] mx-auto overflow-x-hidden px-4 py-4">
			{/* @ts-ignore */}
			<Stepper activeStep={activeStep}>
				{/* @ts-ignore */}
				<Step>
					<UserIcon className="h-5 w-5" />
					<div className="absolute -bottom-[3rem] w-max text-center">
						<p className={activeStep === 0 ? "text-black" : "text-black/40"}>
							Ubicacion
						</p>
					</div>
				</Step>
				{/* @ts-ignore */}
				<Step>
					<CogIcon className="h-5 w-5" />
					<div className="absolute -bottom-[3rem] w-max text-center">
						{/* @ts-ignore */}
						<p className={activeStep === 1 ? "text-black" : "text-black/40"}>
							Creacion
						</p>
					</div>
				</Step>
				{/* @ts-ignore */}
				<Step>
					<BuildingLibraryIcon className="h-5 w-5" />
					<div className="absolute -bottom-[3rem] w-max text-center">
						<p
							className={activeStep === 2 ? "text-black" : "text-black/40"}
							color={activeStep === 2 ? "blue-gray" : "gray"}
						>
							Revision
						</p>
					</div>
				</Step>
			</Stepper>
			<div className="mt-32 flex justify-between"></div>
		</div>
	);
}
