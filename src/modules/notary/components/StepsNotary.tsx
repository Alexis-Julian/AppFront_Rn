import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
	CogIcon,
	UserIcon,
	BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

export default function StepperWithContent({
	activeStep,
	setIsLastStep,
	setIsFirstStep,
}: {
	activeStep: number;
	setIsLastStep: any;
	setIsFirstStep: any;
}) {
	return (
		<div className="w-[80%] mx-auto overflow-x-hidden px-4 py-4   ">
			{/* @ts-ignore */}
			<Stepper
				activeStep={activeStep}
				className="w-[80%] mx-auto "
				isLastStep={(value) => setIsLastStep(value)}
				isFirstStep={(value) => setIsFirstStep(value)}
			>
				{/* @ts-ignore */}
				<Step>
					<UserIcon className="size-5" />
					<div className="absolute -bottom-[3rem] w-max text-center">
						<p className={activeStep === 0 ? "text-black" : "text-black/40"}>
							Ubicacion
						</p>
					</div>
				</Step>
				{/* @ts-ignore */}
				<Step>
					<CogIcon className="size-5" />
					<div className="absolute -bottom-[3rem] w-max text-center">
						<p className={activeStep === 1 ? "text-black" : "text-black/40"}>
							Creacion
						</p>
					</div>
				</Step>
				{/* @ts-ignore */}
				<Step>
					<BuildingLibraryIcon className="size-5" />
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
			<div className="mt-10 flex justify-between"></div>
		</div>
	);
}
