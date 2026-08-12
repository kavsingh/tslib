import { defineConfig } from "oxfmt";

export default defineConfig({
	ignorePatterns: [
		"**/dist/**",
		"**/gen/**",
		"**/dist-*/**",
		"**/reports/**",
		"**/target/**",
		"**/*.gen.*",
		"**/*.generated.*",
		"!**/__mocks__/*.gen.*",
		"!**/__mocks__/*.generated.*",
		"!**/__generated__/__mocks__/**",
		"**/pnpm-*.yaml",
	],
	printWidth: 80,
	useTabs: true,
	sortImports: {
		order: "asc",
		groups: [
			["builtin"],
			["external"],
			["internal", "subpath"],
			["parent"],
			["sibling", "index"],
			["type"],
		],
	},
	overrides: [
		{ files: ["*.json", "*.jsonc"], options: { trailingComma: "none" } },
	],
});
