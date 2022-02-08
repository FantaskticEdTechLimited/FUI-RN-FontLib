import { FHandleFontLoading } from "./func";

export enum FFontFamily {
	POPPINS = "Poppins",
	MULISH = "Mulish",
	MONTSERRAT = "Montserrat",
	NUNITO = "Nunito",
}

export interface FFontProps {
	fontWeight: string;
	fontFamily: FFontFamily;
	isItalic?: boolean;
}

export namespace FFontTypes {
	export const FamilyName = (props: FFontProps) => {
		return FHandleFontLoading(props);
	};
}
