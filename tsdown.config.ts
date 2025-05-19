import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["src/index.ts"],
	target: "node20",
	format: ["cjs", "esm"],
	dts: { resolve: true },
	clean: true,
});
