import { identity } from "./index.js";

describe("index", () => {
	it("returns arg", () => {
		const obj = {};

		expect(identity(obj)).toBe(obj);
	});
});
