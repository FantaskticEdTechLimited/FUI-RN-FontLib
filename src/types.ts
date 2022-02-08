import { FHandleFontLoading } from "./func";
import { useFonts } from "expo-font";

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

const [fontsLoaded] = useFonts({
	"Nunito-SemiBold": require("./fonts/Nunito/Nunito-SemiBold.ttf"),
	"Nunito-SemiBold-Italic": require("./fonts/Nunito/Nunito-SemiBoldItalic.ttf"),
});

export namespace FFontTypes {
	export const FamilyName = (props: FFontProps) => {
		return FHandleFontLoading(props, fontsLoaded) as string | undefined;
	};
}
