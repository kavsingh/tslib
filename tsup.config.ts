import { defineConfig } from "tsup";

export default defineConfig(() => {
	return {
		entry: ["src/index.ts"],
		format: ["cjs", "esm"],
		target: "node18",
		shims: true,
		dts: true,
		sourcemap: true,
		clean: true,
	};
});
