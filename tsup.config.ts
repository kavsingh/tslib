import { defineConfig } from "tsup";

export default defineConfig(() => {
	return {
		entry: ["src/index.ts"],
		format: ["cjs", "esm"],
		target: "node16",
		shims: true,
		dts: true,
		sourcemap: true,
		clean: true,
	};
});
