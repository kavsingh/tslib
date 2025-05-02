import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	target: "node18",
	shims: true,
	dts: { resolve: true },
	sourcemap: true,
	clean: true,
});
