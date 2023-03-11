import { render } from "@testing-library/react";

import ThemeWrapper from "./theme-wrapper";

describe("ThemeWrapper", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<ThemeWrapper />);
		expect(baseElement).toBeTruthy();
	});
});
