import assert from "node:assert";
import { describe, it } from "node:test";

import { identity } from "./index.ts";

void describe("identity", () => {
	void it("should pass through value", () => {
		const obj = {};

		assert.strictEqual(identity(obj), obj);
	});
});
