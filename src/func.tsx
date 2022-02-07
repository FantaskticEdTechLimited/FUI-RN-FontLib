import { useFonts } from "expo-font";
import { FFontFamily, FFontProps } from "./types";

// ====================================================
// Font Weight

// Thin: 100
// Extra-light: 200
// Light: 300
// Regular: 400
// Medium: 500
// Semi-bold: 600
// Bold: 700
// Extra-bold: 800
// Black: 900

// ====================================================

export const FHandleFontLoading = (props: FFontProps) => {
	const [fontsLoaded] = useFonts({
		"Nunito-SemiBold": require("./fonts/Nunito/Nunito-SemiBold.ttf"),
		"Nunito-SemiBold-Italic": require("./fonts/Nunito/Nunito-SemiBoldItalic.ttf"),
	});

	if (!fontsLoaded) return null;
	else {
		switch (props.fontFamily) {
			case FFontFamily.NUNITO:
				if (!props.isItalic) {
					switch (props.fontWeight) {
						case "600":
							return "Nunito-SemiBold";
						default:
							return null;
					}
				} else {
					switch (props.fontWeight) {
						case "600":
							return "Nunito-SemiBold-Italic";
						default:
							return null;
					}
				}

			default:
				return null;
		}
	}
};
