import { useFonts } from "expo-font";
import { LogBox, TextStyle } from "react-native";

// to demolish the unnecessary warning statement
LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

export enum FFontFamilyNames {
	POPPINS = "Poppins",
	MULISH = "Mulish",
	MONTSERRAT = "Montserrat",
	NUNITO = "Nunito",
}

export enum FFontWeight {
	THIN = "100",
	EXTRA_LIGHT = "200",
	LIGHT = "300",
	REGULAR = "400", //default, no fontWeight
	MEDIUM = "500",
	SEMI_BOLD = "600",
	BOLD = "700",
	EXTRA_BOLD = "800",
	BLACK = "900",
}

interface FFontProps {
	fontWeight?: FFontWeight;
	fontFamily?: FFontFamilyNames;
	isItalic?: boolean;
	fontSize?: number;
	lineHeight?: number;
}

enum FDefaultFontsTypes {
	SMALL_TEXT = "Small Text",
	TEXT = "Text",
	LARGE_TEXT = "Large Text",
	SMALL_TITLE = "Small Title",
	TITLE = "Title",
	LARGE_TITLE = "Large Title",
	SMALL_HEADING = "Small Heading",
	HEADING = "Heading",
	LARGE_HEADING = "Large Heading",
}

const FHandleFontLoading = (
	props?: FFontProps,
	defaultFonts?: FDefaultFontsTypes
) => {
	const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("./fonts/Poppins/Poppins-Regular.ttf"),
		"Poppins-Italic": require("./fonts/Poppins/Poppins-Italic.ttf"),
		"Poppins-Medium": require("./fonts/Poppins/Poppins-Medium.ttf"),
		"Poppins-Medium-Italic": require("./fonts/Poppins/Poppins-MediumItalic.ttf"),
		"Montserrat-Regular": require("./fonts/Montserrat/Montserrat-Regular.ttf"),
		"Montserrat-Italic": require("./fonts/Montserrat/Montserrat-Italic.ttf"),
		"Montserrat-SemiBold": require("./fonts/Montserrat/Montserrat-SemiBold.ttf"),
		"Montserrat-SemiBold-Italic": require("./fonts/Montserrat/Montserrat-SemiBoldItalic.ttf"),
		"Nunito-Regular": require("./fonts/Nunito/Nunito-Regular.ttf"),
		"Nunito-Italic": require("./fonts/Nunito/Nunito-Italic.ttf"),
		"Nunito-SemiBold": require("./fonts/Nunito/Nunito-SemiBold.ttf"),
		"Nunito-SemiBold-Italic": require("./fonts/Nunito/Nunito-SemiBoldItalic.ttf"),
	});
	if (!fontsLoaded) return undefined;
	return props?.fontFamily === FFontFamilyNames.NUNITO
		? props?.isItalic
			? props?.fontWeight === FFontWeight.SEMI_BOLD
				? "Nunito-SemiBold-Italic"
				: "Nunito-Italic" //default, no fontWeight
			: props?.fontWeight === FFontWeight.SEMI_BOLD
			? "Nunito-SemiBold"
			: "Nunito-Regular" //default, no fontWeight
		: props?.fontFamily === FFontFamilyNames.POPPINS
		? props?.isItalic
			? props?.fontWeight === FFontWeight.SEMI_BOLD
				? "Poppins-Medium-Italic"
				: "Poppins-Italic" //default, no fontWeight
			: props?.fontWeight === FFontWeight.SEMI_BOLD
			? "Poppins-Medium"
			: "Poppins-Regular" //default, no fontWeight
		: props?.fontFamily === FFontFamilyNames.MONTSERRAT
		? props?.isItalic
			? props?.fontWeight === FFontWeight.SEMI_BOLD
				? "Montserrat-SemiBold-Italic"
				: "Montserrat-Italic" //default, no fontWeight
			: props?.fontWeight === FFontWeight.SEMI_BOLD
			? "Montserrat-SemiBold"
			: "Montserrat-Regular" //default, no fontWeight
		: defaultFonts
		? defaultFonts === FDefaultFontsTypes.SMALL_TEXT ||
		  defaultFonts === FDefaultFontsTypes.TEXT ||
		  defaultFonts === FDefaultFontsTypes.LARGE_TEXT
			? props?.isItalic
				? "Poppins-Medium-Italic"
				: "Poppins-Medium"
			: props?.isItalic
			? "Montserrat-SemiBold-Italic"
			: "Montserrat-SemiBold"
		: "Montserrat-Regular"; //default, no props setting
};

export namespace FFontTypes {
	export const RenderFont = (props?: FFontProps) => {
		return <TextStyle>{
			fontFamily: FHandleFontLoading(props),
			fontSize: props?.fontSize,
			lineHeight: props?.lineHeight,
		};
	};
	export namespace FDefaultFonts {
		export const Small_Text = (props?: FFontProps) => {
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.SMALL_TEXT),
				fontSize: props?.fontSize ?? 10,
				lineHeight: props?.lineHeight ?? 16,
			};
		};
		export const Text = (props?: FFontProps) => {
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.TEXT),
				fontSize: props?.fontSize ?? 12,
				lineHeight: props?.lineHeight ?? 18,
			};
		};
		export const Large_Text = (props?: FFontProps) => {
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.LARGE_TEXT),
				fontSize: props?.fontSize ?? 14,
				lineHeight: props?.lineHeight ?? 22,
			};
		};
		export const Small_Title = (props?: FFontProps) => {
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.SMALL_TITLE),
				fontSize: props?.fontSize ?? 16,
				lineHeight: props?.lineHeight ?? 24,
			};
		};
		export const Title = (props?: FFontProps) => {
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.TITLE),
				fontSize: props?.fontSize ?? 24,
				lineHeight: props?.lineHeight ?? 32,
			};
		};
		export const Large_Title = (props?: FFontProps) => {
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.LARGE_TITLE),
				fontSize: props?.fontSize ?? 32,
				lineHeight: props?.lineHeight ?? 40,
			};
		};
		export const Small_Heading = (props?: FFontProps) => {
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.SMALL_HEADING),
				fontSize: props?.fontSize ?? 48,
				lineHeight: props?.lineHeight ?? 64,
			};
		};
		export const Heading = (props?: FFontProps) => {
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.HEADING),
				fontSize: props?.fontSize ?? 64,
				lineHeight: props?.lineHeight ?? 80,
			};
		};
		export const Large_Heading = (props?: FFontProps) => {
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.LARGE_HEADING),
				fontSize: props?.fontSize ?? 80,
				lineHeight: props?.lineHeight ?? 96,
			};
		};
	}
}
