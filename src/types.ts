import { useFonts } from "expo-font";
import {
	LogBox,
	TextStyle,
	Platform,
	PixelRatio,
	Dimensions,
} from "react-native";

// to demolish the unnecessary warning statement below
LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

export enum FFontFamilyNames {
	POPPINS = "Poppins",
	MULISH = "Mulish",
	MONTSERRAT = "Montserrat",
	NUNITO = "Nunito",
	QUICKSAND = "Quicksand",
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
}

enum FDefaultFontsTypes {
	SMALL_TEXT = "Small Text",
	TEXT = "Text",
	LARGE_TEXT = "Large Text",
	SMALL_TITLE = "Small Title",
	TITLE = "Title",
	LARGE_TITLE = "Large Title",
	// SMALL_HEADING = "Small Heading",
	// HEADING = "Heading",
	// LARGE_HEADING = "Large Heading",
}

const FHandleFontLoading = (
	props?: FFontProps,
	defaultFonts?: FDefaultFontsTypes
) => {
	const [fontsLoaded] = useFonts({
		// ======================================================================================
		// Quicksand
		// ======================================================================================
		"Quicksand-Light": require("./fonts/Quicksand/Quicksand-Light.ttf"),
		"Quicksand-Regular": require("./fonts/Quicksand/Quicksand-Regular.ttf"),
		"Quicksand-Medium": require("./fonts/Quicksand/Quicksand-Medium.ttf"),
		"Quicksand-SemiBold": require("./fonts/Quicksand/Quicksand-SemiBold.ttf"),
		"Quicksand-Bold": require("./fonts/Quicksand/Quicksand-Bold.ttf"),

		// ======================================================================================
		// Poppins
		// ======================================================================================
		"Poppins-Thin": require("./fonts/Poppins/Poppins-Thin.ttf"),
		"Poppins-Thin-Italic": require("./fonts/Poppins/Poppins-ThinItalic.ttf"),
		"Poppins-ExtraLight": require("./fonts/Poppins/Poppins-ExtraLight.ttf"),
		"Poppins-ExtraLight-Italic": require("./fonts/Poppins/Poppins-ExtraLightItalic.ttf"),
		"Poppins-Light": require("./fonts/Poppins/Poppins-Light.ttf"),
		"Poppins-Light-Italic": require("./fonts/Poppins/Poppins-LightItalic.ttf"),
		"Poppins-Regular": require("./fonts/Poppins/Poppins-Regular.ttf"),
		"Poppins-Italic": require("./fonts/Poppins/Poppins-Italic.ttf"),
		"Poppins-Medium": require("./fonts/Poppins/Poppins-Medium.ttf"),
		"Poppins-Medium-Italic": require("./fonts/Poppins/Poppins-MediumItalic.ttf"),
		"Poppins-SemiBold": require("./fonts/Poppins/Poppins-SemiBold.ttf"),
		"Poppins-SemiBold-Italic": require("./fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
		"Poppins-Bold": require("./fonts/Poppins/Poppins-Bold.ttf"),
		"Poppins-Bold-Italic": require("./fonts/Poppins/Poppins-BoldItalic.ttf"),
		"Poppins-ExtraBold": require("./fonts/Poppins/Poppins-ExtraBold.ttf"),
		"Poppins-ExtraBold-Italic": require("./fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
		"Poppins-Black": require("./fonts/Poppins/Poppins-Black.ttf"),
		"Poppins-Black-Italic": require("./fonts/Poppins/Poppins-BlackItalic.ttf"),

		// ======================================================================================
		// Montserrat
		// ======================================================================================
		"Montserrat-Thin": require("./fonts/Montserrat/Montserrat-Thin.ttf"),
		"Montserrat-Thin-Italic": require("./fonts/Montserrat/Montserrat-ThinItalic.ttf"),
		"Montserrat-ExtraLight": require("./fonts/Montserrat/Montserrat-ExtraLight.ttf"),
		"Montserrat-ExtraLight-Italic": require("./fonts/Montserrat/Montserrat-ExtraLightItalic.ttf"),
		"Montserrat-Light": require("./fonts/Montserrat/Montserrat-Light.ttf"),
		"Montserrat-Light-Italic": require("./fonts/Montserrat/Montserrat-LightItalic.ttf"),
		"Montserrat-Regular": require("./fonts/Montserrat/Montserrat-Regular.ttf"),
		"Montserrat-Italic": require("./fonts/Montserrat/Montserrat-Italic.ttf"),
		"Montserrat-Medium": require("./fonts/Montserrat/Montserrat-Medium.ttf"),
		"Montserrat-Medium-Italic": require("./fonts/Montserrat/Montserrat-MediumItalic.ttf"),
		"Montserrat-SemiBold": require("./fonts/Montserrat/Montserrat-SemiBold.ttf"),
		"Montserrat-SemiBold-Italic": require("./fonts/Montserrat/Montserrat-SemiBoldItalic.ttf"),
		"Montserrat-Bold": require("./fonts/Montserrat/Montserrat-Bold.ttf"),
		"Montserrat-Bold-Italic": require("./fonts/Montserrat/Montserrat-BoldItalic.ttf"),
		"Montserrat-ExtraBold": require("./fonts/Montserrat/Montserrat-ExtraBold.ttf"),
		"Montserrat-ExtraBold-Italic": require("./fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf"),
		"Montserrat-Black": require("./fonts/Montserrat/Montserrat-Black.ttf"),
		"Montserrat-Black-Italic": require("./fonts/Montserrat/Montserrat-BlackItalic.ttf"),

		// ======================================================================================
		// Mulish
		// ======================================================================================
		"Mulish-ExtraLight": require("./fonts/Mulish/Mulish-ExtraLight.ttf"),
		"Mulish-ExtraLight-Italic": require("./fonts/Mulish/Mulish-ExtraLightItalic.ttf"),
		"Mulish-Light": require("./fonts/Mulish/Mulish-Light.ttf"),
		"Mulish-Light-Italic": require("./fonts/Mulish/Mulish-LightItalic.ttf"),
		"Mulish-Regular": require("./fonts/Mulish/Mulish-Regular.ttf"),
		"Mulish-Italic": require("./fonts/Mulish/Mulish-Italic.ttf"),
		"Mulish-Medium": require("./fonts/Mulish/Mulish-Medium.ttf"),
		"Mulish-Medium-Italic": require("./fonts/Mulish/Mulish-MediumItalic.ttf"),
		"Mulish-SemiBold": require("./fonts/Mulish/Mulish-SemiBold.ttf"),
		"Mulish-SemiBold-Italic": require("./fonts/Mulish/Mulish-SemiBoldItalic.ttf"),
		"Mulish-Bold": require("./fonts/Mulish/Mulish-Bold.ttf"),
		"Mulish-Bold-Italic": require("./fonts/Mulish/Mulish-BoldItalic.ttf"),
		"Mulish-ExtraBold": require("./fonts/Mulish/Mulish-ExtraBold.ttf"),
		"Mulish-ExtraBold-Italic": require("./fonts/Mulish/Mulish-ExtraBoldItalic.ttf"),
		"Mulish-Black": require("./fonts/Mulish/Mulish-Black.ttf"),
		"Mulish-Black-Italic": require("./fonts/Mulish/Mulish-BlackItalic.ttf"),

		// ======================================================================================
		// Nunito
		// ======================================================================================
		"Nunito-ExtraLight": require("./fonts/Nunito/Nunito-ExtraLight.ttf"),
		"Nunito-ExtraLight-Italic": require("./fonts/Nunito/Nunito-ExtraLightItalic.ttf"),
		"Nunito-Light": require("./fonts/Nunito/Nunito-Light.ttf"),
		"Nunito-Light-Italic": require("./fonts/Nunito/Nunito-LightItalic.ttf"),
		"Nunito-Regular": require("./fonts/Nunito/Nunito-Regular.ttf"),
		"Nunito-Italic": require("./fonts/Nunito/Nunito-Italic.ttf"),
		"Nunito-Medium": require("./fonts/Nunito/Nunito-Medium.ttf"),
		"Nunito-Medium-Italic": require("./fonts/Nunito/Nunito-MediumItalic.ttf"),
		"Nunito-SemiBold": require("./fonts/Nunito/Nunito-SemiBold.ttf"),
		"Nunito-SemiBold-Italic": require("./fonts/Nunito/Nunito-SemiBoldItalic.ttf"),
		"Nunito-Bold": require("./fonts/Nunito/Nunito-Bold.ttf"),
		"Nunito-Bold-Italic": require("./fonts/Nunito/Nunito-BoldItalic.ttf"),
		"Nunito-ExtraBold": require("./fonts/Nunito/Nunito-ExtraBold.ttf"),
		"Nunito-ExtraBold-Italic": require("./fonts/Nunito/Nunito-ExtraBoldItalic.ttf"),
		"Nunito-Black": require("./fonts/Nunito/Nunito-Black.ttf"),
		"Nunito-Black-Italic": require("./fonts/Nunito/Nunito-BlackItalic.ttf"),
	});

	const handleFonts = () => {
		if (props?.fontFamily) {
			switch (props?.fontFamily) {
				case FFontFamilyNames.QUICKSAND:
					switch (props?.fontWeight) {
						case FFontWeight.LIGHT:
							return "Quicksand-Light";
						case FFontWeight.REGULAR:
							return "Quicksand-Regular";
						case FFontWeight.MEDIUM:
							return "Quicksand-Medium";
						case FFontWeight.SEMI_BOLD:
							return "Quicksand-SemiBold";
						case FFontWeight.BOLD:
							return "Quicksand-Bold";
						default:
							return "Quicksand-Regular";
					}
				case FFontFamilyNames.NUNITO:
					if (props?.isItalic) {
						switch (props?.fontWeight) {
							case FFontWeight.EXTRA_LIGHT:
								return "Nunito-ExtraLight-Italic";
							case FFontWeight.LIGHT:
								return "Nunito-Light-Italic";
							case FFontWeight.REGULAR:
								return "Nunito-Italic";
							case FFontWeight.MEDIUM:
								return "Nunito-Medium-Italic";
							case FFontWeight.SEMI_BOLD:
								return "Nunito-SemiBold-Italic";
							case FFontWeight.BOLD:
								return "Nunito-Bold-Italic";
							case FFontWeight.EXTRA_BOLD:
								return "Nunito-ExtraBold-Italic";
							case FFontWeight.BLACK:
								return "Nunito-Black-Italic";
							default:
								return "Nunito-Italic";
						}
					} else {
						switch (props?.fontWeight) {
							case FFontWeight.EXTRA_LIGHT:
								return "Nunito-ExtraLight";
							case FFontWeight.LIGHT:
								return "Nunito-Light";
							case FFontWeight.REGULAR:
								return "Nunito-Regular";
							case FFontWeight.MEDIUM:
								return "Nunito-Medium";
							case FFontWeight.SEMI_BOLD:
								return "Nunito-SemiBold";
							case FFontWeight.BOLD:
								return "Nunito-Bold";
							case FFontWeight.EXTRA_BOLD:
								return "Nunito-ExtraBold";
							case FFontWeight.BLACK:
								return "Nunito-Black";
							default:
								return "Nunito-Regular";
						}
					}
				case FFontFamilyNames.POPPINS:
					if (props?.isItalic) {
						switch (props?.fontWeight) {
							case FFontWeight.THIN:
								return "Poppins-Thin-Italic";
							case FFontWeight.EXTRA_LIGHT:
								return "Poppins-ExtraLight-Italic";
							case FFontWeight.LIGHT:
								return "Poppins-Light-Italic";
							case FFontWeight.REGULAR:
								return "Poppins-Italic";
							case FFontWeight.MEDIUM:
								return "Poppins-Medium-Italic";
							case FFontWeight.SEMI_BOLD:
								return "Poppins-SemiBold-Italic";
							case FFontWeight.BOLD:
								return "Poppins-Bold-Italic";
							case FFontWeight.EXTRA_BOLD:
								return "Poppins-ExtraBold-Italic";
							case FFontWeight.BLACK:
								return "Poppins-Black-Italic";
							default:
								return "Poppins-Italic";
						}
					} else {
						switch (props?.fontWeight) {
							case FFontWeight.THIN:
								return "Poppins-Thin";
							case FFontWeight.EXTRA_LIGHT:
								return "Poppins-ExtraLight";
							case FFontWeight.LIGHT:
								return "Poppins-Light";
							case FFontWeight.REGULAR:
								return "Poppins-Regular";
							case FFontWeight.MEDIUM:
								return "Poppins-Medium";
							case FFontWeight.SEMI_BOLD:
								return "Poppins-SemiBold";
							case FFontWeight.BOLD:
								return "Poppins-Bold";
							case FFontWeight.EXTRA_BOLD:
								return "Poppins-ExtraBold";
							case FFontWeight.BLACK:
								return "Poppins-Black";
							default:
								return "Poppins-Regular";
						}
					}
				case FFontFamilyNames.MONTSERRAT:
					if (props?.isItalic) {
						switch (props?.fontWeight) {
							case FFontWeight.THIN:
								return "Montserrat-Thin-Italic";
							case FFontWeight.EXTRA_LIGHT:
								return "Montserrat-ExtraLight-Italic";
							case FFontWeight.LIGHT:
								return "Montserrat-Light-Italic";
							case FFontWeight.REGULAR:
								return "Montserrat-Italic";
							case FFontWeight.MEDIUM:
								return "Montserrat-Medium-Italic";
							case FFontWeight.SEMI_BOLD:
								return "Montserrat-SemiBold-Italic";
							case FFontWeight.BOLD:
								return "Montserrat-Bold-Italic";
							case FFontWeight.EXTRA_BOLD:
								return "Montserrat-ExtraBold-Italic";
							case FFontWeight.BLACK:
								return "Montserrat-Black-Italic";
							default:
								return "Montserrat-Italic";
						}
					} else {
						switch (props?.fontWeight) {
							case FFontWeight.THIN:
								return "Montserrat-Thin";
							case FFontWeight.EXTRA_LIGHT:
								return "Montserrat-ExtraLight";
							case FFontWeight.LIGHT:
								return "Montserrat-Light";
							case FFontWeight.REGULAR:
								return "Montserrat-Regular";
							case FFontWeight.MEDIUM:
								return "Montserrat-Medium";
							case FFontWeight.SEMI_BOLD:
								return "Montserrat-SemiBold";
							case FFontWeight.BOLD:
								return "Montserrat-Bold";
							case FFontWeight.EXTRA_BOLD:
								return "Montserrat-ExtraBold";
							case FFontWeight.BLACK:
								return "Montserrat-Black";
							default:
								return "Montserrat-Regular";
						}
					}
				case FFontFamilyNames.MULISH:
					if (props?.isItalic) {
						switch (props?.fontWeight) {
							case FFontWeight.EXTRA_LIGHT:
								return "Mulish-ExtraLight-Italic";
							case FFontWeight.LIGHT:
								return "Mulish-Light-Italic";
							case FFontWeight.REGULAR:
								return "Mulish-Italic";
							case FFontWeight.MEDIUM:
								return "Mulish-Medium-Italic";
							case FFontWeight.SEMI_BOLD:
								return "Mulish-SemiBold-Italic";
							case FFontWeight.BOLD:
								return "Mulish-Bold-Italic";
							case FFontWeight.EXTRA_BOLD:
								return "Mulish-ExtraBold-Italic";
							case FFontWeight.BLACK:
								return "Mulish-Black-Italic";
							default:
								return "Mulish-Italic";
						}
					} else {
						switch (props?.fontWeight) {
							case FFontWeight.EXTRA_LIGHT:
								return "Mulish-ExtraLight";
							case FFontWeight.LIGHT:
								return "Mulish-Light";
							case FFontWeight.REGULAR:
								return "Mulish-Regular";
							case FFontWeight.MEDIUM:
								return "Mulish-Medium";
							case FFontWeight.SEMI_BOLD:
								return "Mulish-SemiBold";
							case FFontWeight.BOLD:
								return "Mulish-Bold";
							case FFontWeight.EXTRA_BOLD:
								return "Mulish-ExtraBold";
							case FFontWeight.BLACK:
								return "Mulish-Black";
							default:
								return "Mulish-Regular";
						}
					}
				default:
					return undefined;
			}
		} else {
			if (defaultFonts) {
				switch (defaultFonts) {
					case FDefaultFontsTypes.SMALL_TEXT:
					case FDefaultFontsTypes.TEXT:
					case FDefaultFontsTypes.LARGE_TEXT:
						if (props?.isItalic) return "Poppins-Medium-Italic";
						else return "Poppins-Medium";
					default:
						if (props?.isItalic) return "Montserrat-SemiBold-Italic";
						else return "Montserrat-SemiBold";
				}
			} else return undefined;
		}
	};

	if (!fontsLoaded) return undefined;
	return handleFonts();
};

const FRWDFontSize = (size: number) => {
	const { width: SCREEN_WIDTH } = Dimensions.get("window");

	const baseWidth = 360;

	const RWDScaleCalculator = (value: number) => {
		const result = SCREEN_WIDTH * (value / baseWidth);
		return result;
	};

	const newSize = RWDScaleCalculator(size);

	if (Platform.OS === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
	}
};

const lineHeightMultiplier = 1.5;

const defaultFontSize = {
	Small_Text: FRWDFontSize(10),
	Text: FRWDFontSize(12),
	Large_Text: FRWDFontSize(14),
	Small_Title: FRWDFontSize(16),
	Title: FRWDFontSize(24),
	Large_Title: FRWDFontSize(32),
};

const defaultLineHeight = {
	Small_Text: defaultFontSize.Small_Text * lineHeightMultiplier,
	Text: defaultFontSize.Text * lineHeightMultiplier,
	Large_Text: defaultFontSize.Large_Text * lineHeightMultiplier,
	Small_Title: defaultFontSize.Small_Title * lineHeightMultiplier,
	Title: defaultFontSize.Title * lineHeightMultiplier,
	Large_Title: defaultFontSize.Large_Title * lineHeightMultiplier,
};

export namespace FFontTypes {
	export const RenderFont = (props?: FFontProps) => {
		const fontSize = props?.fontSize && FRWDFontSize(props.fontSize);
		const lineHeight = fontSize && fontSize * lineHeightMultiplier;
		return <TextStyle>{
			fontFamily: FHandleFontLoading(props),
			fontSize: fontSize,
			lineHeight: lineHeight,
		};
	};
	export namespace FDefaultFonts {
		export const Small_Text = (props?: FFontProps) => {
			const fontSize = props?.fontSize && FRWDFontSize(props.fontSize);
			const lineHeight = fontSize && fontSize * lineHeightMultiplier;
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.SMALL_TEXT),
				fontSize: fontSize ?? defaultFontSize.Small_Text,
				lineHeight: lineHeight ?? defaultLineHeight.Small_Text,
			};
		};
		export const Text = (props?: FFontProps) => {
			const fontSize = props?.fontSize && FRWDFontSize(props.fontSize);
			const lineHeight = fontSize && fontSize * lineHeightMultiplier;
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.TEXT),
				fontSize: fontSize ?? defaultFontSize.Text,
				lineHeight: lineHeight ?? defaultLineHeight.Text,
			};
		};
		export const Large_Text = (props?: FFontProps) => {
			const fontSize = props?.fontSize && FRWDFontSize(props.fontSize);
			const lineHeight = fontSize && fontSize * lineHeightMultiplier;
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.LARGE_TEXT),
				fontSize: fontSize ?? defaultFontSize.Large_Text,
				lineHeight: lineHeight ?? defaultLineHeight.Large_Text,
			};
		};
		export const Small_Title = (props?: FFontProps) => {
			const fontSize = props?.fontSize && FRWDFontSize(props.fontSize);
			const lineHeight = fontSize && fontSize * lineHeightMultiplier;
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.SMALL_TITLE),
				fontSize: fontSize ?? defaultFontSize.Small_Title,
				lineHeight: lineHeight ?? defaultLineHeight.Small_Title,
			};
		};
		export const Title = (props?: FFontProps) => {
			const fontSize = props?.fontSize && FRWDFontSize(props.fontSize);
			const lineHeight = fontSize && fontSize * lineHeightMultiplier;
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.TITLE),
				fontSize: fontSize ?? defaultFontSize.Title,
				lineHeight: lineHeight ?? defaultLineHeight.Title,
			};
		};
		export const Large_Title = (props?: FFontProps) => {
			const fontSize = props?.fontSize && FRWDFontSize(props.fontSize);
			const lineHeight = fontSize && fontSize * lineHeightMultiplier;
			return <TextStyle>{
				fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.LARGE_TITLE),
				fontSize: fontSize ?? defaultFontSize.Large_Title,
				lineHeight: lineHeight ?? defaultLineHeight.Large_Title,
			};
		};
		// export const Small_Heading = (props?: FFontProps) => {
		// 	const fontSize = FRWDFontSize(props?.fontSize!);
		// 	const lineHeight = fontSize * lineHeightMultiplier;
		// 	return <TextStyle>{
		// 		fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.SMALL_HEADING),
		// 		fontSize: fontSize ?? 48,
		// 		lineHeight: lineHeight ?? 64,
		// 	};
		// };
		// export const Heading = (props?: FFontProps) => {
		// 	const fontSize = FRWDFontSize(props?.fontSize!);
		// 	const lineHeight = fontSize * lineHeightMultiplier;
		// 	return <TextStyle>{
		// 		fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.HEADING),
		// 		fontSize: fontSize ?? 64,
		// 		lineHeight: lineHeight ?? 80,
		// 	};
		// };
		// export const Large_Heading = (props?: FFontProps) => {
		// 	const fontSize = FRWDFontSize(props?.fontSize!);
		// 	const lineHeight = fontSize * lineHeightMultiplier;
		// 	return <TextStyle>{
		// 		fontFamily: FHandleFontLoading(props, FDefaultFontsTypes.LARGE_HEADING),
		// 		fontSize: fontSize ?? 80,
		// 		lineHeight: lineHeight ?? 96,
		// 	};
		// };
	}
}
