import { describe, it, expect } from "bun:test";

import { identity } from "./index.js";

describe("identity", () => {
	it("should pass through value", () => {
		const obj = {};

		expect(identity(obj)).toBe(obj);
	});
});
