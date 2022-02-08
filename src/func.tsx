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

export const FHandleFontLoading = (props: FFontProps, isLoaded: boolean) => {
	if (!isLoaded) return undefined;
	return props.fontFamily === FFontFamily.NUNITO
		? props.isItalic
			? props.fontWeight === "600"
				? "Nunito-SemiBold-Italic"
				: undefined
			: props.fontWeight === "600"
			? "Nunito-SemiBold"
			: undefined
		: undefined;
};
